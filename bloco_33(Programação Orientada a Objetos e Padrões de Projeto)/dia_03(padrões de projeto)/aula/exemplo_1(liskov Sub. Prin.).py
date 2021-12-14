from abc import ABC, abstractmethod

class Connector(ABC):
    @abstractmethod
    def get_count(token):
        pass

    @abstractmethod
    def count_request():
        pass


class RedisConnector(Connector):
    def __init__(self, address, port):
        # A lógica da conexão ao banco Redis
        pass

    def get_count(token):
        # A lógica de acesso ao banco Redis
        pass

    def count_request(token):
        # A lógica de acesso ao banco Redis
        pass

class SqlConnector(Connector):
    def __init__(self, address, port):
        # A lógica da conexão ao banco SQL
        pass

    def get_count(token):
        # A lógica de acesso ao banco SQL
        pass

    def count_request(token):
        # A lógica de acesso ao banco SQL
        pass