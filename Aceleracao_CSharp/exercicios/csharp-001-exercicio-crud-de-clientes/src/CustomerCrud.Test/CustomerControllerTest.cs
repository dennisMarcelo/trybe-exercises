using System.Text;
using System.Text.Json;
using CustomerCrud.Core;
using CustomerCrud.Repositories;
using CustomerCrud.Requests;
using System.Net.Http;

namespace CustomerCrud.Test;

public class CustomersControllerTest : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;
    private readonly Mock<ICustomerRepository> _repositoryMock;

    public CustomersControllerTest(WebApplicationFactory<Program> factory)
    {
        _repositoryMock = new Mock<ICustomerRepository>();

        _client = factory.WithWebHostBuilder(builder =>
        {
            builder.ConfigureServices(services =>
            {
                services.AddScoped<ICustomerRepository>(st => _repositoryMock.Object);
            });
        }).CreateClient();
    }

    [Fact(DisplayName = "GetAll must return all clients")]
    public async Task GetAllTest()
    {
        var customers = AutoFaker.Generate<Customer>(3);
        _repositoryMock.Setup(x => x.GetAll()).Returns(customers);

        var response = await _client.GetAsync("/Customer");
        var content = await response.Content.ReadFromJsonAsync<IEnumerable<Customer>>();

        response.StatusCode.Should().Be(HttpStatusCode.OK);
        content.Should().BeEquivalentTo(customers);

        _repositoryMock.Verify(r => r.GetAll(), Times.Once);
    }

    [Fact(DisplayName = "GetById must return curstomer by Id")]
    public async Task GetByIdTest()
    {
        var customer = AutoFaker.Generate<Customer>();
        customer.Id = 1;

        _repositoryMock.Setup(x => x.GetById(1)).Returns(customer);

        var response = await _client.GetAsync("/Customer/1");
        var content = await response.Content.ReadFromJsonAsync<Customer>();

        response.StatusCode.Should().Be(HttpStatusCode.OK);
        content.Should().BeEquivalentTo(customer);

        _repositoryMock.Verify(r => r.GetById(1), Times.Once);

    }

    [Fact(DisplayName = "Create must create new customer.")]
    public async Task CreateTest()
    {
        var requestFake = AutoFaker.Generate<CustomerRequest>();

        _repositoryMock.Setup(r => r.GetNextIdValue()).Returns(1);
        _repositoryMock.Setup(r => r.Create(It.Is<Customer>(r => r.Id == 1))).Returns(true);

        try
        {
            var cancellationTokenSource = new CancellationTokenSource(TimeSpan.FromMilliseconds(300));
            var response = await _client
                .PostAsJsonAsync("/Customer", requestFake, cancellationTokenSource.Token);
            var content = await response.Content.ReadFromJsonAsync<Customer>();

            // var contentString = response.Content.ReadAsStringAsync().Result;
            // Console.WriteLine(contentString);

            response.StatusCode.Should().Be(HttpStatusCode.Created);

            content!.Id.Should().Be(1);
            content.Name.Should().Be(requestFake.Name);
            content.CPF.Should().Be(requestFake.CPF);
            content.Transactions.Should().BeEquivalentTo(requestFake.Transactions);

            content.CreatedAt.Should()
                .BeCloseTo(content.UpdatedAt, TimeSpan.FromMilliseconds(100));

            _repositoryMock.Verify(r => r.GetNextIdValue(), Times.Once);
            _repositoryMock.Verify(r => r.Create(It.Is<Customer>(r => r.Id == 1)), Times.Once);
        }
        catch (OperationCanceledException)
        {
            Assert.True(false, "request time must be less milliseconds milliseconds");
        }

    }

    // parei aqui
    [Fact(DisplayName = "Update must update customer.")]
    public async Task UpdateTest()
    {
        var request = AutoFaker.Generate<CustomerRequest>();

        _repositoryMock.Setup(r => r.Update(It.Is<int>(id => id == 1),
            It.IsAny<object>())).Returns(true);

        var response = await _client.PutAsJsonAsync("/customer/1", request);
        var content = await response.Content.ReadAsStringAsync();

        response.StatusCode.Should().Be(HttpStatusCode.OK);

        content.Should().Be("Customer 1 updated");

        _repositoryMock.Verify(r => r.Update(It.Is<int>(id => id == 1),
            It.IsAny<object>()), Times.Once);
    }

    [Fact(DisplayName = "Delete with correct id must delete customer.")]
    public async Task DeleteTest()
    {
        _repositoryMock.Setup(r => r.Delete(It.Is<int>(id => id == 1))).Returns(true);

        var response = await _client.DeleteAsync("/customer/1");
        var content = await response.Content.ReadAsStringAsync();

        response.StatusCode.Should().Be(HttpStatusCode.NoContent);

        _repositoryMock.Verify(r => r.Delete(It.Is<int>(id => id == 1)), Times.Once);

        // delete with wrong id
        var response2 = await _client.DeleteAsync("/customer/2");
        var content2 = await response2.Content.ReadAsStringAsync();

        response2.StatusCode.Should().Be(HttpStatusCode.NotFound);
        content2.Should().Be("Customer not found");
        _repositoryMock.Verify(r => r.Delete(It.Is<int>(id => id != 1)), Times.Once);
    }

    [Fact(DisplayName = "Delete with wrong id must not delete customers.")]
    public async Task DeleteTestWithWrongId()
    {
        _repositoryMock.Setup(r => r.Delete(It.Is<int>(id => id == 1))).Returns(true);

        var response = await _client.DeleteAsync("/customer/2");
        var content = await response.Content.ReadAsStringAsync();

        response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        content.Should().Be("Customer not found");
        _repositoryMock.Verify(r => r.Delete(It.Is<int>(id => id != 1)), Times.Once);
    }
}