namespace teste_6_poo_polimorfismo_e_classesAbstratas;

public class Hawk : Animal
{
  public Hawk(int age) : base(age) { }

  public override string EatingHabits { get; set; } = "herbivore";
  public override string Habitat { get; set; } = "Forest";

  public override void Feed()
  {
    Console.WriteLine("Hawk is hunting the food");
  }

  public override void Move()
  {
    Console.WriteLine("Hawk is walking");

  }
}
