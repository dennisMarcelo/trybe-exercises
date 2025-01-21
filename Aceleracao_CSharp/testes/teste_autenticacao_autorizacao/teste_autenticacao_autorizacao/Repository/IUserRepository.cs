namespace teste_autenticacao_autorizacao.Repository;

using teste_autenticacao_autorizacao.Models;

public interface IUserRepository
{
  User Add(User user);
  User? GetUserByEmail(string email);
}