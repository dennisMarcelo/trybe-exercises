class Retangulo:
  def __init__(self, ladoVetical, ladoHorizontal):
    self.type = 'Retangulo'
    self.ladoVetical = ladoVetical
    self.ladoHorizontal = ladoHorizontal

  def getArea(self):
    area = self.ladoVetical * self.ladoHorizontal
    print(f"Area: {area}")

  def getPerimetro(self):
    perimetro = (self.ladoVetical*2)+(self.ladoHorizontal*2)
    print(f"perimetro: {perimetro}")

retangulo = Retangulo(4, 10)

retangulo.getArea()
retangulo.getPerimetro()
