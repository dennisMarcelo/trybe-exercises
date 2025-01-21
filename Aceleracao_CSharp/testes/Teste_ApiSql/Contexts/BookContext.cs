using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Teste_ApiSql.Models;
namespace Teste_ApiSql.Contexts;

// Renomeado DatabaseContext para BookContext
public class BookContext : DbContext
{
  public DbSet<Book> Books { get; set; }
  public DbSet<Publisher> Publishers { get; set; }
  public DbSet<Author> Authors { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  {
    optionsBuilder.UseSqlServer(@"Server=127.0.0.1;Database=master;User=SA;Password=password123!;");
  }

  protected override void OnModelCreating(ModelBuilder mb)
  {
    // Definição da relação com Author
    mb.Entity<Book>()
      .HasOne(b => b.Author)
      .WithMany(a => a.Books)
      .HasForeignKey(a => a.AuthorId);

    // Definição da relação com Publisher
    mb.Entity<Book>()
      .HasOne(b => b.Publisher)
      .WithMany(p => p.Books)
      .HasForeignKey(b => b.PublisherId);
  }
}