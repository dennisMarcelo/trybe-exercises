namespace teste_6_poo_polimorfismo_e_classesAbstratas;

public class Dog : Animal
{
  public override string EatingHabits { get; set; } = "Carnivore";
  public override string Habitat { get; set; } = "Human homes";

  public Dog(int age) : base(age) { }

  public override void Feed()
  {
    Console.WriteLine("Feeding the dog");
  }
  public override void Move()
  {
    Console.WriteLine("Dog is walking");
  }

  public void Bark()
  {
    Console.WriteLine("Woof!");
  }
}
