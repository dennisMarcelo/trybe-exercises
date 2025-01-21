namespace teste_autenticacao_autorizacao.test;

using Moq;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using FluentAssertions;
using teste_autenticacao_autorizacao.Repository;
using teste_autenticacao_autorizacao.Controllers;
using teste_autenticacao_autorizacao.Models;
using System.Net;

public class UserControllerTest
{

    [Theory]
    [InlineData(1, "eliza", "eliza@gmail.com", "Trybe123", "A")]
    [InlineData(2, "dennis", "dennis@hotmail.com", "Trybes2", "B")]
    public void Authenticate_ReturnSuccess_WithCorrectLogin(int id, string name, string email, string password, string access)
    {
        User userMoq = new User
        {
            Id = id,
            Name = name,
            Email = email,
            Password = password,
            Access = access
        };

        LoginDTORequest loginDTO = new LoginDTORequest
        {
            Email = email,
            Password = password
        };

        Mock<IUserRepository> mockRepository = new Mock<IUserRepository>();
        mockRepository.Setup(r => r.GetUserByEmail(email)).Returns(userMoq);

        var response = new UserController(mockRepository.Object).Login(loginDTO);

        var obResult = Assert.IsType<OkObjectResult>(response);
        obResult.StatusCode.Should().Be((int)HttpStatusCode.OK);
    }

    [Theory]
    [InlineData(1, "eliza", "eliza@gmail.com", "Trybe123", "A")]
    [InlineData(2, "dennis", "dennis@hotmail.com", "Trybes2", "B")]
    public void Authenticate_ReturnUnautorized_WithWrongLogin(int id, string name, string email, string password, string access)
    {
        User userMoq = new User
        {
            Id = id,
            Name = name,
            Email = email,
            Password = password,
            Access = access
        };

        LoginDTORequest loginDTO = new LoginDTORequest
        {
            Email = "ronaldo10@gmail.com",
            Password = "euSouoMilhor10"
        };

        Mock<IUserRepository> mockRepository = new Mock<IUserRepository>();
        mockRepository.Setup(r => r.GetUserByEmail(email)).Returns(userMoq);

        var response = new UserController(mockRepository.Object).Login(loginDTO);

        var obResult = Assert.IsType<UnauthorizedObjectResult>(response);
        obResult.StatusCode.Should().Be((int)HttpStatusCode.Unauthorized);
    }
}