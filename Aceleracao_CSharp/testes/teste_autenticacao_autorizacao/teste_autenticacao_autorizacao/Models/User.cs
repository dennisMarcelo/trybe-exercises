namespace teste_autenticacao_autorizacao.Models;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
  [Key]
  public int Id { get; set; }
  public string? Name { get; set; }
  public string? Email { get; set; }
  public string? Password { get; set; }
  public string? Access { get; set; }
}
