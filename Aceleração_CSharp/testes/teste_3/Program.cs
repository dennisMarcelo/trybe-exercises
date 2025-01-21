using System;
using ExtensionMethods;

namespace teste3
{
  public class Program
  {
    public static void Main()
    {
      string textOne = "Você está aprendendo sobre ";
      string textTwo = "Strings em C#, ";
      string textThree = "e agora Você sabe concatenar textos utilizando a função Concat()!";

      string concatResult = string.Concat(textOne, textTwo, textThree);

      Console.WriteLine(concatResult);
      Console.WriteLine(concatResult.IndexOf("Você", 10));

      // -------------------------------------------------------

      var today = DateTime.Now;
      var duration = new TimeSpan(-36, 0, 0, 0);
      var answer = today.Add(duration);

      System.Console.WriteLine("Hoje é " + today.Day + "/" + today.Month + " - " + today.DayOfWeek);
      System.Console.WriteLine("36 atrás era " + answer.Day + "/" + answer.Month + " - " + answer.DayOfWeek);

      // -------------------------------------------------------
      DateTime date1 = new DateTime(2010, 9, 1, 5, 0, 0);
      DateTime date2 = new DateTime(2022, 8, 10, 12, 0, 0);

      int result = DateTime.Compare(date1, date2);
      string relationship;

      if (result < 0) relationship = "é anterior à";
      else if (result == 0) relationship = "è o mesmo que";
      else relationship = "è posterior à";

      Console.WriteLine("{0} {1} {2}", date1.ToString("D"), relationship, date2.ToString("D"));
      Console.WriteLine("método de extenção: {0}", relationship.WordCount());

      //Formatos customizados: Você também pode customizar um formato para o .ToString(). Para mais detalhes, veja a documentação da microsoft: https://learn.microsoft.com/pt-br/dotnet/api/system.datetime.tostring?view=net-6.0#system-datetime-tostring(system-string).

      // -------------------------------------------------------

      var myDate = DateTime.Now;
      Console.WriteLine("data: {0}", myDate);
    }
  }
}