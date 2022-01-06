from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"Drawing SVG {self.svg_path} with {self.format}"


class SvgAdapter(PngInterface):
    def __init__(self, interface):
        self.interface = interface

    def draw(self):
        print(self.interface.get_image())

image = SvgAdapter(SvgImage('~/Images/teste'))

image.draw()