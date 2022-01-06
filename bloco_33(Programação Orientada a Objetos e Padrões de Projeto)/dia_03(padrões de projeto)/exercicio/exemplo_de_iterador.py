class DatabaseIterator:
    def __init__(self, sql_connector):
        self.db = sql_connector
        self.current_page = 0

    def __next__(self):
        data = self.iterable.get_page(page=self.current_page)
        if not data:
            raise StopIteration()

        self.current_page += 1
        return data


class DatabaseIterable:
    def __init__(self, sql_connector, query_template):
        self.db = sql_connector
        self.query_template = query_template

    def get_page(self, page):
        return self.db.get(query=self.query_template, page=page)

    def __iter__(self):
        return DatabaseIterator(self.db)

# Primeiro instanciamos o ITERÁVEL
post_paginator = DatabaseIterable(db, post_page_query_template)

# Em seguida podemos usar o for pra iterar
# o ITERADOR é criado implicitamente
for page in post_paginator:
    # faz algo com a pagina, que é uma lista de resultados
    for post in page:
        print(post['title'])