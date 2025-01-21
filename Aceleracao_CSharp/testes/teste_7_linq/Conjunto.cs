namespace teste_7_linq;

public static class Conjunto
{
  static List<string> stacksProjectA = new List<string> { "C#", "SQL Server", "JSON", "Microsserviços" };
  static List<string> stacksProjectB = new List<string> { "Java", "MySQL", "JSON", "WebAPI" };
  static List<string> stacksProjectC = new List<string> { "C#", "MySQL", "XML", "C#", "MySql", "C#", "GO" };

  public static void Start()
  {
    Console.WriteLine("--------Unio-----------");
    var stacksProjectsAB = stacksProjectA.Union(stacksProjectB);
    foreach (var stack in stacksProjectsAB)
    {
      Console.WriteLine(stack);
    }


    Console.WriteLine("--------Intersect------");
    var stacksProjectsAandB = stacksProjectA.Intersect(stacksProjectB);
    foreach (var stack in stacksProjectsAandB)
    {
      Console.WriteLine(stack);
    }


    Console.WriteLine("--------Expect--------");
    var stacksProjectsAexceptB = stacksProjectA.Except(stacksProjectB);
    foreach (var stack in stacksProjectsAexceptB)
    {
      Console.WriteLine(stack);
    }


    Console.WriteLine("--------Distinct--------");
    var stacksProjectDistinct = stacksProjectC.Distinct();
    foreach (var stack in stacksProjectDistinct)
    {
      Console.WriteLine(stack);
    }
  }
}
