import requests
import time

# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
# Para contornar o problema é utilizado o time.sleep()
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    time.sleep(5)