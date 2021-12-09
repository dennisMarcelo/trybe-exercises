class Tv:
    def __init__(self, tamanho):
        self.volume = 50
        self.tamanho = tamanho
        self.canal = 1
        self.ligada = False
    
    def aumentar_volume(self):
      if self.volume < 99:
          self.volume += 1

    def diminuir_volume(self):
      if self.volume > 0:
          self.volume -= 1

    def modificar_canal(self, canal):
        if 1 < canal < 99:
            self.canal = canal
        else:
            raise ValueError
            
    def ligar_desligar(self):
        self.ligada = (False if self.ligada else True)

lg = Tv('lg')

lg.modificar_canal(100)
print(lg.canal)