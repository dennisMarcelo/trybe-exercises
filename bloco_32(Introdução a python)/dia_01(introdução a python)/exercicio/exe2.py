def get_bigger_name(names):
  bigger_name = ''
  for name in names:
    if len(name) > len(bigger_name):
      bigger_name = name
  
  return bigger_name

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
bigger_name = get_bigger_name(names)

print(bigger_name)