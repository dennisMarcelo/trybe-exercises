def count_pair_number(n):
    counter = 1
    qtt_par_number = 0
    while counter <= n:
      if (counter % 2 == 0):
          qtt_par_number += 1
      counter += 1

    return qtt_par_number


print(count_pair_number(10))

assert(count_pair_number(10) == 5)