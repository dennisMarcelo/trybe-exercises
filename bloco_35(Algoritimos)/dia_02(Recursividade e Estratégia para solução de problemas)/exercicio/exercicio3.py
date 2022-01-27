def get_higher_number(array, heigh_number=0):
    if (len(array) == 1):
        return heigh_number
    if(array[0]>heigh_number):
        return get_higher_number(array[1:], heigh_number = array[0])
    return get_higher_number(array[1:], heigh_number)

print(get_higher_number([10, 40, 30, 10, 1, 0]))
