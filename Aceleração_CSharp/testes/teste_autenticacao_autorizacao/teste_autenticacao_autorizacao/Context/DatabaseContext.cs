namespace teste_autenticacao_autorizacao.Context;

using teste_autenticacao_autorizacao.Models;
using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext, IDatabaseContext
{
  public DbSet<User> Users { get; set; } = null!;
  public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    if (!optionsBuilder.IsConfigured)
    {
      var connectionString = "Server=localhost;Database=AuthDb;User=SA;Password=SqlServer123!;TrustServerCertificate=True";
      optionsBuilder.UseSqlServer(connectionString);
    }
  }

  public DatabaseContext() { }
}
