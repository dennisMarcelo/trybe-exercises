namespace teste_6_poo_polimorfismo_e_classesAbstratas;

public abstract class Animal
{
  public int Age { get; set; }
  public abstract string EatingHabits { get; set; }
  public abstract string Habitat { get; set; }

  public abstract void Feed();
  public abstract void Move();

  public Animal(int age)
  {
    Age = age;
  }

  public void Sleep()
  {
    Console.WriteLine("Zzzz");
  }
}
