namespace TestApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using TestApi.Core;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class ClientController : Controller
{
  private static List<Client> _clients = new();
  private static int _nextId = 1;

  /// <summary>
  /// Adiciona um novo cliente.
  /// </summary>
  /// <returns>O cliente criado</returns>
  /// <response code="201">Retorna o cliente criado.</response>
  [HttpPost]
  public ActionResult Create(ClientRequest request)
  {
    var client = request.CreateClient(_nextId++);
    _clients.Add(client);

    return StatusCode(201, client);
  }

  [HttpPut("{id}")]
  public ActionResult Update(int id, ClientRequest request)
  {
    var client = _clients.FirstOrDefault(c => c.Id == id);

    if (client == null)
      return NotFound("Client not found");

    var clientUpdated = request.UpdateClient(client);

    return Ok(clientUpdated);
  }

  [HttpDelete("{id}")]
  public ActionResult Delete(int id)
  {
    var removed = _clients.RemoveAll(c => c.Id == id);

    if (removed == 0)
      return NotFound("Client not found");

    return NoContent();
  }

  [HttpGet]
  public JsonResult Listar()
  {
    return Json(_clients);
  }

  // Caso o id passado não seja um inteiro e seja menor que 1 retorna um erro
  [HttpGet("GetClientById/{id:int:min(1)}")]
  public ActionResult<Client> GetClientById(int id)
  {
    Client? client = _clients.Find((e) => e.Id == id);

    if (client == null)
      return NotFound("Client not found");

    return Json(client);

    /*  
    Outros tipos de constraints
      {id:alpha}: Restringe o parâmetro para conter apenas letras
      {id:bool}: Restringe o parâmetro para representar valores booleanos
      {id:datetime}: Restringe para usar valores de Data e Hora
      {id:Guid}: Restringe para usar apenas Guids
    */
  }
}