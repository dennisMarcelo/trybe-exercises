using Microsoft.AspNetCore.Mvc;

namespace TestApi.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloWorldController : Controller
{
  [HttpGet]
  public string Get() => "Hello world!";
}