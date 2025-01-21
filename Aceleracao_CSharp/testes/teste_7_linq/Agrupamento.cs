namespace teste_7_linq;
using teste_7_linq.Domain;

public static class Agrupamento
{
  static List<Developer> developers = new List<Developer>
  {
      new Developer { Name = "Julia", ProgrammingLanguage = "C#" },
      new Developer { Name = "Paulo", ProgrammingLanguage = "Java" },
      new Developer { Name = "Rebeca", ProgrammingLanguage = "C#" },
      new Developer { Name = "Rodrigo", ProgrammingLanguage = "C#" },
      new Developer { Name = "Joana", ProgrammingLanguage = "Java" },
      new Developer { Name = "Alan", ProgrammingLanguage = "Python" }
  };

  public static void Start()
  {
    var developerSkills = from developer in developers
                          group developer by developer.ProgrammingLanguage into languages
                          select languages;

    Console.WriteLine("--------Keys-----------");
    foreach (var languageGroup in developerSkills)
    {
      Console.WriteLine("Linguagem: " + languageGroup.Key);
    }

    Console.WriteLine("--------Name-----------");
    foreach (var languageGroup in developerSkills)
    {
      Console.WriteLine("Linguagem: " + languageGroup.Key);
      foreach (var developer in languageGroup)
      {
        Console.WriteLine("Pessoas desenvolvedoras: " + developer.Name);
      }
    }
  }
}
