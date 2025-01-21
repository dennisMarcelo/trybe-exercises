namespace teste_5_poo;

public class Rocket
{
  int _fuel;
  int _maxFuel = 5000;

  public int FuelAsPercentage
  {
    get { return _fuel * 100 / _maxFuel; }
    set
    {
      if (value > 100 || value < 0)
        throw new ArgumentOutOfRangeException("FuelAsPercentage deve ser um valor entre 100 e 0");

      _fuel = (value * _maxFuel) / 100;
    }
  }
}
