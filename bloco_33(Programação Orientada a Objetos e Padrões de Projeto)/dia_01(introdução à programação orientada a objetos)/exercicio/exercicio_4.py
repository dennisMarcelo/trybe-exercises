""" 
nome da Abstração
pedido

atributos/estados
- cliente
- itens consumidos
- forma de pagamento
- descontos

comportamentos
- calcular total
- calcular total com descontos

-----

Nome da abstração
Item

atributos/estados
- nome
- preço

comportamentos
- alterar preço
"""

class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
      self.preco = novo_preco


class Pedido:
    def __init__(self, cliente, itens, forma_de_pagamento, desconto):
        self.cliente = cliente
        self.itens = itens
        self.forma_de_pagamento = forma_de_pagamento
        self.desconto = desconto/100

    def calcular_total(self):
        total = 0
        for item in self.itens:
            total += item.preco
        return round(total, 2)

    def Calcular_total_com_desconto(self):
        desconto = self.calcular_total() * (1 - self.desconto)
        return round(desconto, 2)

sanduba = Item('X-tudo', 16.9)
guarana = Item('Guarana', 5.9)
fritas = Item('Fritas crocantes', 10.9)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, guarana, fritas], 'Cartao', 10)

print(pedido_mesa_1.calcular_total())
print(pedido_mesa_1.Calcular_total_com_desconto())