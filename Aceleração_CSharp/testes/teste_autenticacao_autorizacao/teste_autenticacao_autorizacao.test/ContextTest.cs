namespace teste_autenticacao_autorizacao.test;

using teste_autenticacao_autorizacao.Context;
using teste_autenticacao_autorizacao.Models;
using Microsoft.EntityFrameworkCore;

public class ContextTest : DbContext, IDatabaseContext
{
  public DbSet<User> Users { get; set; }

  public ContextTest(DbContextOptions<ContextTest> options) : base(options) { }
}
