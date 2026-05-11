using System;
using System.IO;
using System.Collections.Generic;

List<osztaly> lista = new List<osztaly>();

if (File.Exists("forras.txt"))
{
    string[] sorok = File.ReadAllLines("forras.txt");
    osztaly aktualisAdat = null;
    List<int[]> ideiglenesMatrix = new List<int[]>();

    foreach (var sor in sorok)
    {
        if (string.IsNullOrWhiteSpace(sor)) continue;

        // Ha a sor tartalmaz pontot, de nem vesszőt, akkor az egy dátum
        if (sor.Contains('.') && !sor.Contains(','))
        {
            // Mentjük az előzőt, ha már volt
            if (aktualisAdat != null)
            {
                aktualisAdat.MatrixBeallit(ideiglenesMatrix);
                lista.Add(aktualisAdat);
            }

            aktualisAdat = new osztaly(sor);
            ideiglenesMatrix = new List<int[]>();
        }
        else
        {
            // Ez egy mátrix sor: számokat tartalmaz vesszővel elválasztva
            string[] darabok = sor.Split(',');
            int[] szamok = Array.ConvertAll(darabok, int.Parse);
            ideiglenesMatrix.Add(szamok);
        }
    }

    // Az utolsó blokk hozzáadása
    if (aktualisAdat != null)
    {
        aktualisAdat.MatrixBeallit(ideiglenesMatrix);
        lista.Add(aktualisAdat);
    }

    // Kiíratás pontosan a TXT formátumban
    foreach (var m in lista)
    {
        Console.WriteLine(m.Datum);
        for (int i = 0; i < m.Sor; i++)
        {
            for (int j = 0; j < m.Oszlop; j++)
            {
                Console.Write(m.Matrix[i, j]);
                if (j < m.Oszlop - 1) Console.Write(",");
            }
            Console.WriteLine();
        }
    }
}
else
{
    Console.WriteLine("forras.txt nem található!");
}