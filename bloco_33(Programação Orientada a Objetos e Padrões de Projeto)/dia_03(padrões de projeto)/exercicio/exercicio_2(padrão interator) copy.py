from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return f"{self.valor} de {self.naipe}" 


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
      self.cartas = cartas
      self._pos = 0

    def __next__(self):
      try:
          carta = self.cartas[self._pos]
      except IndexError:
          raise StopIteration()
      else:
          self._pos += 1
          return carta


class Baralho(Iterable):
    naipes = 'copas ouros espadas paus'.split()
    valores = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
      return IteradorDoBaralho(self._cartas)


# Primeiro instanciamos o ITERÁVEL
cartas_baralho = Baralho()

# o ITERADOR é criado implicitamente
for carta in cartas_baralho:
    print(carta)