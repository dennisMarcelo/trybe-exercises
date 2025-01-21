namespace teste_6_poo_composicao;

public class Program
{
  public static void Main()
  {
    /* 
      Composição é uma técnica utilizada em POO que visa colocar um classe dentro de outra classe
      diminuindo o aclopamento e complexidade dentro de uma classe principal e reaproveitando 
      uma classe mais genérica.

      a classe car contem a classe engine
     */
    Car car = new Car();
    Car car2 = new Car();
    // caso seja necesário é possivel instaciar uma nova classe fora da classe car.
    //car.Engine = new Engine() { IsStarted = true };
    car.StartEngine();

    Console.WriteLine(Car.QtdInstancias);// teste para ver se variavel estatica mantem valor;

  }
}