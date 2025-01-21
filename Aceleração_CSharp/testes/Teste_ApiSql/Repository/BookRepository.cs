namespace Teste_ApiSql.Repository;

using Microsoft.EntityFrameworkCore;
using Teste_ApiSql.Contexts;
using Teste_ApiSql.Models;

public class BookRepository
{
  private readonly BookContext _context;

  public BookRepository(BookContext context)
  {
    _context = context;
  }

  // Para realizar a consulta, adicionamos um método
  // que realiza essa consulta em BookRepository
  public List<Book?> GetBookList()
  {
    var query = _context.Books.ToList();

    return query;
  }

  public Book GetById(int id)
  {
    return _context.Books
      .Where(e => e.BookId == id)
      .Include(e => e.Author)
      .Include(e => e.Publisher)
      .First();
  }

  public Book Add(Book book)
  {
    _context.Add(book);
    _context.SaveChanges();
    return book;
  }

  public void Update(Book book)
  {
    _context.Update(book);
    _context.SaveChanges();
  }

  public virtual void DeleteBook(int id)
  {

    var book = _context.Books
      .Include(e => e.Author)
      .Include(e => e.Publisher)
      .Single(p => p.BookId == id);

    _context.Remove(book); // removemos o livro
    _context.Remove(book.Author); //removemos o autor relacionado
    _context.Remove(book.Publisher); // remove a editora associada
    _context.SaveChanges(); //ao final salvamos nossa exclusão, para isso se refletir em nosso banco
  }
}