namespace teste_autenticacao_autorizacao.test;

using Moq;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using FluentAssertions;
using System.Net;
using System.Net.Http.Headers;
using teste_autenticacao_autorizacao.Repository;
using teste_autenticacao_autorizacao.Models;
using teste_autenticacao_autorizacao.Context;
using Microsoft.EntityFrameworkCore;
using System.Text;

public class ResponseToken
{
  public string? token { get; set; }
}

public class responseProduct
{
  public string? message { get; set; }
  public string? name { get; set; }
  public string? email { get; set; }
}


public class ProductControllerTest : IClassFixture<WebApplicationFactory<Program>>
{
  public HttpClient _clientTest;

  public ProductControllerTest(WebApplicationFactory<Program> factory)
  {
    _clientTest = factory.WithWebHostBuilder(builder =>
    {
      builder.ConfigureServices(services =>
      {
        var descriptor = services.SingleOrDefault(d => d.ServiceType == typeof(DbContextOptions<DatabaseContext>));
        if (descriptor != null)
        {
          services.Remove(descriptor);
        }

        services.AddDbContext<ContextTest>(options =>
        {
          options.UseInMemoryDatabase("InMemoryTestDatabase");
        });
        services.AddScoped<IDatabaseContext, ContextTest>();
        services.AddScoped<IUserRepository, UserRepository>();

        var sp = services.BuildServiceProvider();
        using (var scope = sp.CreateScope())
        using (var appContext = scope.ServiceProvider.GetRequiredService<ContextTest>())
        {
          appContext.Database.EnsureCreated();
          appContext.Database.EnsureDeleted();
          appContext.Database.EnsureCreated();
          appContext.Users.Add(new User { Id = 1, Name = "dennis", Email = "dennis@hotmail.com", Password = "Trybes2", Access = "B" });
          appContext.Users.Add(new User { Id = 2, Name = "eliza", Email = "eliza@gmail.com", Password = "Trybe123", Access = "A" });
          appContext.Users.Add(new User { Id = 3, Name = "tafarel", Email = "tafarel@gmail.com", Password = "Trybe123", Access = "" });
          appContext.SaveChanges();
        }
      });
    }).CreateClient();
  }


  [Theory]
  [InlineData("Rota autorizada")]
  public async Task Get_ReturnSuccess_WithoutToken(string receivedMessage)
  {
    string route = "/api/Product/listar-sem-token";

    _clientTest
      .DefaultRequestHeaders
      .Authorization = null;

    var response = await _clientTest.GetAsync(route);

    Assert.Equal(HttpStatusCode.OK, response?.StatusCode);

    var responseString = await response.Content.ReadAsStringAsync();
    responseProduct responseProduct = JsonConvert.DeserializeObject<responseProduct>(responseString);

    Assert.Equal(receivedMessage, responseProduct.message);
  }

  [Theory]
  [InlineData("eliza@gmail.com", "Trybe123", "eliza", "Rota protegida por level A")]
  public async Task Get_ReturnSuccess_WithToken(string email, string password, string name, string receivedMessage)
  {
    string route = "/api/Product/listar-com-token";

    var token = await GetToken(email, password);

    _clientTest
      .DefaultRequestHeaders
      .Authorization = new AuthenticationHeaderValue("Bearer", token);

    var response = await _clientTest.GetAsync(route);

    Assert.Equal(HttpStatusCode.OK, response?.StatusCode);

    var responseString = await response.Content.ReadAsStringAsync();

    responseProduct responseProduct = JsonConvert.DeserializeObject<responseProduct>(responseString);

    Assert.Equal(receivedMessage, responseProduct.message);
    Assert.Equal(name, responseProduct.name);
    Assert.Equal(email, responseProduct.email);
  }

  [Theory]
  [InlineData("eliza@gmail.com", "Trybe123", "eliza", "Rota protegida por level A")]
  public async Task Post_ReturnErroForbiden_WithRoleDifenteOfB(string email, string password, string name, string receivedMessage)
  {
    string route = "/api/Product/post-com-token";

    var token = await GetToken(email, password);

    _clientTest
      .DefaultRequestHeaders
      .Authorization = new AuthenticationHeaderValue("Bearer", token);

    var response = await _clientTest.PostAsync(route, new StringContent(""));

    Assert.Equal(HttpStatusCode.Forbidden, response?.StatusCode);
  }

  public async Task<string> GetToken(string email, string password)
  {
    string route = "/api/User/Login";

    var user = new User { Email = email, Password = password };

    var response = await _clientTest.PostAsync(route, new StringContent(JsonConvert.SerializeObject(user), Encoding.UTF8, "application/json"));


    var responseString = await response.Content.ReadAsStringAsync();
    var responseUser = JsonConvert.DeserializeObject<ResponseToken>(responseString);

    return responseUser.token;
  }
}
