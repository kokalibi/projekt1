using System;
using System.Collections.Generic;
using System.Text;

internal class beolvaso
{
    public static int[,] MatrixBetoltes(string fajlutvonal)
    {
        string[] sorok = File.ReadAllLines(fajlutvonal);
        int sorSzam = sorok.Length;
        int oszlopSzam = sorok[0].Split(new[] { ' ', '\t', ',' }, StringSplitOptions.RemoveEmptyEntries).Length;

        int[,] matrix = new int[sorSzam, oszlopSzam];

        for (int i = 0; i < sorSzam; i++)
        {
            string[] adatok = sorok[i].Split(new[] { ' ', '\t', ',' }, StringSplitOptions.RemoveEmptyEntries);
            for (int j = 0; j < oszlopSzam; j++)
            {
                matrix[i, j] = int.Parse(adatok[j]);
            }
        }
        return matrix;
    }
}

