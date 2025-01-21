using System;
using teste_4_tipos_genericos.Domain;

namespace teste_4_tipos_genericos
{
  class Program
  {
    public static void Main()
    {
      /*       
      GenericList<Pessoa> list1 = new GenericList<Pessoa>(
              new Pessoa() { Nome = "Dennis Marcelo", Idade = 25 }
            );

      list1.Add(new Pessoa() { Nome = "Nicolas Tesla", Idade = 86 });
      */
      GenericList<string> list3 = new GenericList<string>("Dennis Marcelo");
      list3.Add("Nicolas Tesla");
      list3.Print();
    }
  }
}