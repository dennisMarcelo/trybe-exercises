import requests

try:
    # A pagina de proposito tem um delay de 10s, 
    # mas definimos que a aplicação só vai esperar 2s e lança um error.
    response = requests.get("https://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # Aqui tratando o erro a aplicação espera 11s.
    response = requests.get("https://httpbin.org/delay/10", timeout=11)
finally:
    print(response.status_code)