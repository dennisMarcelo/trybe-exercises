namespace teste_autenticacao_autorizacao.Controllers;

public class LoginDTORequest
{
  public string? Email { get; set; }
  public string? Password { get; set; }
}

public class LoginDTOResponse
{
  public string? Token { get; set; }
}
