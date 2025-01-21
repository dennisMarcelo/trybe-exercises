namespace Teste_ApiSql;
using Microsoft.EntityFrameworkCore;
using Teste_ApiSql.Models;
public class TesteEntityContext : DbContext
{
  // Criar um construtor que envia as configurações de inicialização
  // para o construtor da classe pai DbContext
  public TesteEntityContext(DbContextOptions<TesteEntityContext> options)
        : base(options)
  { }

  // Adicionamos Student como um DbSet
  public DbSet<Student> Students { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    // Verificamos se o banco de dados já foi configurado
    if (!optionsBuilder.IsConfigured)
    {
      // Buscamos o valor da connection string armazenada nas variáveis de ambiente
      // DOTNET_CONNECTION_STRING="Server=localhost;Database=TesteEntity;User=Sa;Password=1234.Den"
      var connectionString = Environment.GetEnvironmentVariable("DOTNET_CONNECTION_STRING");

      // Executamos o método UseSqlServer e passamos a connection string a ele
      optionsBuilder.UseSqlServer(connectionString);
    }
  }
}
