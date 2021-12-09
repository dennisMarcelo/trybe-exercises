class estatistic:
  def __init__(self, list):
      self.list = list

  def average(self):
      average = format(sum(self.list)/len(self.list), '.2f')
      print(average)

  def median(self):
      list_sorted = sorted(self.list)
      if(len(list_sorted)%2 == 0):
          middle_number = int(len(list_sorted)/2)
          print(list_sorted[middle_number])
      else:
          middle_number = int((len(list_sorted)+1)/2)
          print(list_sorted[middle_number])

  def mode(self):
      # quando tiver tempo implemente a função de moda
      pass


height_students = estatistic([160, 178, 187, 156, 179, 130, 170, 168, 143])

height_students.average()
height_students.median()
height_students.mode()
