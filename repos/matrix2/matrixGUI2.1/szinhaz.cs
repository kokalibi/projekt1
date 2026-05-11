using System;
using System.Collections.Generic;
using System.Text;


internal class szinhaz
{
    public string datum { get; set; }
    public int[,] matrix { get; set; }
    public int sor => matrix.GetLength(0);
    public int oszlop => matrix.GetLength(1);
    public szinhaz(string bedatum, string[] beadatok)
    {
        datum = bedatum;
        int index = 0;
        List<int[]> szamok = new List<int[]>();
        while (index < beadatok.Length)
        {
            int[] darabok = beadatok[index].Split(',').Select(int.Parse).ToArray();
            szamok.Add(darabok);
            index++;
        }
        int sorok = szamok.Count;
        int oszlopok = szamok[0].Length;
        matrix = new int[sorok, oszlopok];
        for (int i = 0; i < sorok; i++)
        {
            for (int j = 0; j < oszlopok; j++)
            {
                matrix[i, j] = szamok[i][j];
            }
        }
    }
}

