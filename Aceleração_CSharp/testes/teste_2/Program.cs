using System;
public class Program
{
  public static void Main()
  {
    // int someString = 1;

    // string teste = IdentifyPolygon(someString);
    // Console.WriteLine(teste);

    int[,] multidimensional = new int[3, 2] { { 1, 3 }, { 1, 2 }, { 1, 2 } };
    int[,,] multidimensional2 = new int[3, 2, 1] { { { 1 }, { 1 } }, { { 1 }, { 1 } }, { { 1 }, { 1 } } };

    //-----------------------------------------------
    int[][] jagged1 = new int[3][]
    {
      new int[] {1,2,3,4},
      new int[] {5,6,7,8,9,10},
      new int[] {11,12,13,14}
    };

    //-----------------------------------------------
    int[][][] jagged2 = new int[2][][]
    {
      new int[][] {
        new int[] {1,2,3,4},
        new int[] {5,6,7,8,9,10},
        new int[] {11,12,13,14}
      },
      new int[][] {
        new int[] {15,6,17,18},
        new int[] {19,20,21,22,23,24},
        new int[] {25,26,27,28}
      }
    };

    Console.WriteLine(jagged2[0][1][1]);

    //-----------------------------------------------
    int[][][][] jagged3 = new int[3][][][]
    {
      new int[][][] {
        new int[][] {
          new int[] {1,2,3,4},
          new int[] {5,6,7,8,9,10},
          new int[] {11,12,13,14}
        },
      },
      new int[][][] {
        new int[][] {
          new int[] {1,2,3,4},
          new int[] {5,6,7,8,9,10},
          new int[] {11,12,13,14}
        },
      },
      new int[][][] {
        new int[][] {
          new int[] {1,2,3,4},
          new int[] {5,6,7,8,9,10},
          new int[] {11,12,13,14}
        },
      },
    };
    Console.WriteLine(jagged3[0][0][0][3]);

    jagged3[0][0] = new int[][] {
      new int[] { 100, 101, 103, 104 }
    };
    Console.WriteLine(jagged3[0][0][0][3]);

    jagged3[0][0][0] = new int[] { 201, 203, 204, 205 };
    Console.WriteLine(jagged3[0][0][0][3]);

    //-----------------------------------------------
    int[] posicoes = new int[] { 1, 2, 3, 5 };
    Console.WriteLine(IndexOf(posicoes, 2));
  }

  public static string IdentifyPolygon(int sideCount)
  {
    var name = string.Empty;
    switch (sideCount)
    {
      case < 2:
        name = "Não é um polígono";
        break;
      case 3:
        name = "Triângulo";
        break;
      case 4:
        name = "Quadrado";
        break;
      case > 5:
        name = "Pentágono";
        break;
      default:
        name = "Polígono não identificado";
        break;
    }
    return name;
  }
  public static int IndexOf(int[] numbers, int value)
  {
    var position = -1;

    for (int i = 0; i < numbers.Count(); i++)
    {
      if (numbers[i] == value)
      {
        position = i;
        break;
      }
    }

    return position;
  }
}