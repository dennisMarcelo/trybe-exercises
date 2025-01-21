using code_first.Models;

namespace code_first
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var db = new MarketContext())
            {
                db.Database.EnsureCreated();

                Category category = new Category()
                {
                    Name = "vehicle"
                };

                Product product = new Product()
                {
                    Name = "Carro",
                    Category = category,
                };

                db.Products.Add(product);
                db.SaveChanges();


                db.SaveChanges();
            }
        }
    }
}

