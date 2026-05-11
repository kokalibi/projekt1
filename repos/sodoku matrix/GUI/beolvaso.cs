using System;
using System.Collections.Generic;
using System.Text;

namespace GUI
{
    class beolvaso
    {
        public int[,] matrix { get; set; }
        public int sor => matrix.GetLength(0);
        public int oszlop => matrix.GetLength(1);
        public beolvaso(string beadatok) 
        {
            int index = 0;
            List<int[]> lista = new List<int[]>();
            while (index<beadatok.Length)
            {
                string sor = "";
                while (index < beadatok.Length && beadatok[index] != ' ')
                {
                    sor += beadatok[index];
                    index++;
                }
                index++;
                if (!string.IsNullOrWhiteSpace(sor))
                {
                    string[] szamok = sor.Split(new char[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries);
                    int[] szamokInt = Array.ConvertAll(szamok, int.Parse);
                    lista.Add(szamokInt);
                }
            }
            
        }
    }
}
