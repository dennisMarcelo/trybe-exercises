using Microsoft.EntityFrameworkCore;


namespace EShop.Models
{
    public class EShopContext : DbContext
    {
        public DbSet<Client> Clients { get; set; }
        public DbSet<Order> Orders { get; set; }

        public EShopContext(DbContextOptions<EShopContext> options)
             : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder ob)
        {
            ob.UseInMemoryDatabase("EShopDb");
        }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            mb.Entity<Client>()
                .HasKey(a => a.ClientIdentity);

            mb.Entity<Order>()
                .HasOne<Client>()
                .WithOne()
                .HasForeignKey("ClientIdentity");
        }
    }
}
