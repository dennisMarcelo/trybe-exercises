import pytest
from exercicio1 import get_numbers

def test_get_numbers_when_number_is_three():
  'retorna o array correto quando é passado um inteiro 3'
  assert get_numbers(3) == [1, 2, "Fizz"]

def test_get_numbers_when_number_is_five():
  'retorna o array correto quando é passado um inteiro 5'
  assert get_numbers(5) == [1, 2, "Fizz", 4, "Buzz"]

def test_get_numbers_when_number_is_ten():
  'retorna o array correto quando é passado um inteiro 10'
  assert get_numbers(15) == [1, 2, "Fizz", 4, "Buzz", 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

def test_get_numbers_when_return_exception_is_a_message():
  with pytest.raises(TypeError, match='A entrada deve ser um inteiro'):
    get_numbers('1s')
  