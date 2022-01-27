def count_pair_number(n, qtt):
    if(n == 1):
        return  qtt
    if (n % 2 == 0):
        return count_pair_number(n-1, qtt+1)
    return count_pair_number(n-1, qtt)


""" Numero máximo que da para ser utilizado em uma função recursiva é 998! """
print(count_pair_number(998, 0))
