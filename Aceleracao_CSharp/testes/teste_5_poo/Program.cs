namespace teste_5_poo;

public class Program
{
  public static void Main()
  {
    Rocket rocket = new Rocket
    {
      FuelAsPercentage = 90
    };

    Console.WriteLine(rocket.FuelAsPercentage);
  }
}
