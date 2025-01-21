namespace teste_6_poo_polimorfismo_e_classesAbstratas;

public class Program
{
  public static void Main()
  {
    Dog dog = new Dog(3);
    Hawk hawk = new Hawk(6);

    // observe que este é um ótimo caso onde se usar classes abstratas;
    FeedAnimal(dog);
    FeedAnimal(hawk);
  }

  // Este é um exemplo de polimorfismo, pois, com a mesma mensagem consigo fazer
  // com que diferentes abstrações me retornem resultados diferentes.
  public static void FeedAnimal(Animal animal)
  {
    animal.Feed();
  }
}
