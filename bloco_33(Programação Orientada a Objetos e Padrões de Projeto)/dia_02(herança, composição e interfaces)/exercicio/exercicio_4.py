from abc import ABC, abstractmethod
from datetime import datetime

class ManipuladoDeLog(ABC):
    @classmethod
    @abstractmethod
    def log():
      raise NotImplementedError


class LogEmArquivo(ManipuladoDeLog):
    @classmethod
    def log(cls, msg):
      with open('log.txt', 'a') as arquivo:
        print(msg, file=arquivo)


class LogEmTela(ManipuladoDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set([manipuladores])
    
    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log('INFO', msg)

    def alerta(self, msg):
        self.__log('ALERTA', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)
    
    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{nivel} - {data}]: {msg}"


teste = Log(LogEmTela())
teste.adicionar_manipulador(LogEmArquivo())
teste.info('O log esta funcionando!')
teste.erro('Menssage de erro feita com sucesso!')