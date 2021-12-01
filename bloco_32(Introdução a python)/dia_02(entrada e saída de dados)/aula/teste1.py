""" 
  1. para criar  ambiente isolado: $ python3 -m venv .venv
  2. caso o venv não esteja instalado, utilize o comando: $ sudo apt install python3-venv
  3. para ativar: $ source .venv/bin/activate
 """

import http  # importa o pacote http como um módulo

from http import client  # importa o módulo client do pacote http

from http.client import HTTP_PORT  # importa a constante HTTP_POST do módulo client do pacote http


""" 
  4. conferir se o  ambiente virtual deu certo: $ which python3
 """