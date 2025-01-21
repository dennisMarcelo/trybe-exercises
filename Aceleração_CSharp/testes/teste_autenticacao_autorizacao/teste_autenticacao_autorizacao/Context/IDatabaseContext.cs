namespace teste_autenticacao_autorizacao.Context;

using teste_autenticacao_autorizacao.Models;
using Microsoft.EntityFrameworkCore;

public interface IDatabaseContext
{
  public DbSet<User> Users { get; set; }
  public int SaveChanges();
}