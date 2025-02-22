using Microsoft.AspNetCore.Mvc;
using teste_autenticacao_autorizacao.Models;
using teste_autenticacao_autorizacao.Repository;
using teste_autenticacao_autorizacao.Services;

namespace teste_autenticacao_autorizacao.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
  private readonly IUserRepository _repository;
  private readonly TokenGenerator _tokenGenerator;

  public UserController(IUserRepository repository)
  {
    _repository = repository;
    _tokenGenerator = new TokenGenerator();
  }

  [HttpPost("signup")]
  public IActionResult AddUser([FromBody] User user)
  {
    User userCreated = _repository.Add(user);
    var token = _tokenGenerator.Generate(userCreated);
    return Created("", new { token });
  }

  [HttpPost("login")]
  public IActionResult Login([FromBody] LoginDTORequest loginDTO)
  {
    User? existingUser = _repository.GetUserByEmail(loginDTO.Email!);
    if (existingUser == null) return Unauthorized(new { message = "Incorrect e-mail or password" });
    if (existingUser.Password != loginDTO.Password) return Unauthorized(new { message = "Incorrect e-mail or password" });

    var token = _tokenGenerator.Generate(existingUser);
    return Ok(new { token });
  }
}
