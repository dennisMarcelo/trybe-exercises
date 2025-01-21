using Microsoft.AspNetCore.Mvc;
using CustomerCrud.Core;
using CustomerCrud.Requests;
using CustomerCrud.Repositories;

namespace CustomerCrud.Controllers;

[ApiController]
[Route("[controller]")]
public class CustomerController : ControllerBase
{
  private static int _countId = 1;

  private ICustomerRepository _customerRepository;

  public CustomerController(ICustomerRepository customerRepository)
  {
    _customerRepository = customerRepository;
  }

  [HttpGet]
  public ActionResult GetAll()
  {
    IEnumerable<Customer> customers = _customerRepository.GetAll();

    return Ok(customers);
  }

  [HttpGet("{id}")]
  public ActionResult GetById(int id)
  {
    Customer? customers = _customerRepository.GetById(id);

    return Ok(customers);
  }

  [HttpPost]
  public ActionResult Create(CustomerRequest customerRequest)
  {
    var id = _customerRepository.GetNextIdValue();

    Customer customer = new Customer(id, customerRequest);

    _customerRepository.Create(customer);

    return CreatedAtAction("GetById", new { id = customer.Id }, customer);
  }

  [HttpPut("{id}")]
  public ActionResult Update(int id, CustomerRequest request)
  {
    var didUpdate = _customerRepository.Update(id, new
    {
      Name = request.Name,
      CPF = request.CPF,
      Transactions = request.Transactions,
      UpdatedAt = DateTime.Now
    });

    if (!didUpdate)
      return NotFound("Customer not found");

    return Ok($"Customer {id} updated");
  }


  [HttpDelete("{id}")]
  public ActionResult Delete(int id)
  {
    var didDelete = _customerRepository.Delete(id);

    if (!didDelete)
      return NotFound("Customer not found");

    return NoContent();
  }

}
