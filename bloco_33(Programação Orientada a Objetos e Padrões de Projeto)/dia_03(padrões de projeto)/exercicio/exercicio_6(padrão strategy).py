from abc import ABC, abstractmethod


class Orcamento:
    def __init__(self, valor):
        self.valor = valor
        
    def calcular_imposto(self, adapter):
       return adapter.calcular(self.valor)


class StrategyImposto(ABC):
    @abstractmethod
    def calcular(self):
        raise NotImplementedError('A função __calcular_imposto não foi implementada.')


class ISS(StrategyImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(StrategyImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PIS(StrategyImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.0065


class COFINS(StrategyImposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")