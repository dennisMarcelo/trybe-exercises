namespace code_first.Models
{
    public sealed class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public Category? Category { get; set; }

        public int CategoryId { get; set; }
    }
}
