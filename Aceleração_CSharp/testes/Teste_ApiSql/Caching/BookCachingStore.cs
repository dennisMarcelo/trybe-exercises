using Teste_ApiSql.Repository;
using Microsoft.Extensions.Caching.Memory;
using Teste_ApiSql.Models;

namespace Teste_ApiSql.Caching;

public class BookCachingStore
{
  private readonly IMemoryCache _memoryCache;
  private readonly BookRepository _bookRepository;
  private readonly string _cacheKey = "books";
  public BookCachingStore(IMemoryCache memoryCache, BookRepository bookRepository)
  {
    _memoryCache = memoryCache;
    _bookRepository = bookRepository;
  }

  private static string GetKey(string key)
  {
    return $"{typeof(Book)}:{key}";
  }

  public Book? Get(int BookId)
  {
    var key = GetKey(BookId.ToString());
    var item = _memoryCache.Get<Book>(key);

    if (item == null)
    {
      item = _bookRepository.GetById(BookId);
      if (item != null)
      {
        _memoryCache.Set(key, item);
      }
    }

    return item;
  }
}
