from pymongo import MongoClient

client = MongoClient()
db = client.catalogue

# busca um documento da coleção, sem filtros
print(db.books.find_one())

# O nosso cliente é um gerenciador de contexto ( with ), 
# logo podemos utilizá-lo como tal, evitando problemas 
# com o fechamento da conexão com o banco de dados:
with MongoClient() as client:
    db = client.database
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])