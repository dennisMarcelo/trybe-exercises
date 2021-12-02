def get_numbers(n):
  if(type(n) != int):
    raise TypeError('A entrada deve ser um inteiro')
  result = []
  for i in range(1, n+1):
    if(i % 3 == 0 and i % 5 == 0):
      result.append('FizzBuzz')
    elif(i % 3 == 0):
      result.append('Fizz')
    elif(i % 5 == 0):
      result.append('Buzz')
    else:
      result.append(i)

  return result

# print(get_numbers('15'))