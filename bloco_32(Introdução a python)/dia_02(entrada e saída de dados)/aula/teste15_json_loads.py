# A linguagem Python já inclui um módulo para manipulação desse tipo de arquivo e seu nome é json .
# Seus principais métodos para manipulação são: load , loads , dump , dumps .

import json  # json é um modulo que vem embutido, porém precisamos importá-lo

with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista
