using System;

namespace teste_4_tipos_genericos;

public class GenericList<T>
{
  private Node? Head;
  public GenericList()
  {
    Head = null;
  }

  public GenericList(T input)
  {
    Head = new Node(input);
  }

  private class Node
  {
    public T Value;
    public Node? Next;

    public Node(T t)
    {
      Value = t;
      Next = null;
    }
  }

  public void Add(T input)
  {
    if (Head == null)
    {
      Head = new Node(input);
      Console.WriteLine("Nó Head criado!");
    }
    else
    {
      //Encontra onde inserir o próximo nó na lista.
      Node lastNode = Head;
      while (lastNode.Next != null) lastNode = lastNode.Next;

      lastNode.Next = new Node(input);
    }
  }

  public void Print()
  {
    Node? printNode = Head;

    if (printNode == null) return;

    while (printNode != null)
    {
      Console.WriteLine(printNode.Value);
      printNode = printNode.Next;
    }
  }
}
