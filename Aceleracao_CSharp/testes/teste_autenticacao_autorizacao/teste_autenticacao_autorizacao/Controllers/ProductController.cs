using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using teste_autenticacao_autorizacao.Models;
using teste_autenticacao_autorizacao.Repository;
using teste_autenticacao_autorizacao.Services;
using System.Security.Claims;
namespace teste_autenticacao_autorizacao.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProductController : ControllerBase
  {
    [HttpGet("listar-sem-token")]
    public IActionResult Get()
    {
      return Ok(new { message = "Rota autorizada" });
    }

    [HttpGet("listar-com-token")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize(Policy = "levelA")]
    public IActionResult GetProdutuct()
    {
      var token = HttpContext.User.Identity as ClaimsIdentity;
      var name = token?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
      var email = token?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

      return Ok(new { message = "Rota protegida por level A", name, email });
    }

    [HttpPost("post-com-token")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize(Policy = "levelB")]
    public IActionResult Post()
    {
      var token = HttpContext.User.Identity as ClaimsIdentity;
      var name = token?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name)?.Value;
      var email = token?.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

      return Ok(new { message = "Rota protegida por level B", name, email });
    }
  }
}