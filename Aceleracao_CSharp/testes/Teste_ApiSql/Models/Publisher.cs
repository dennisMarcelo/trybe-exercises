using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Teste_ApiSql.Models;

public class Publisher
{
  [Key]
  public int PublisherId { get; set; }
  public string Name { get; set; }
  [InverseProperty("Publisher")]
  public ICollection<Book> Books { get; set; }
}