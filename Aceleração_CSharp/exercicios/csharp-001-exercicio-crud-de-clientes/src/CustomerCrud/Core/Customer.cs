using CustomerCrud.Requests;

namespace CustomerCrud.Core;

public class Customer
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? CPF { get; set; }
    public List<Transaction> Transactions { get; set; } = new();
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

    public Customer(int id, CustomerRequest request)
    {
        DateTime now = DateTime.Now;

        Id = id;
        Name = request.Name;
        CPF = request.CPF;
        Transactions = request.Transactions;
        CreatedAt = now;
        UpdatedAt = now;
    }

    public Customer() { }
}