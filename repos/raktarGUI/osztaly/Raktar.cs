using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace osztaly
{
    public class Raktar
    {
        public List<Rekesz[,]> Polcok = new List<Rekesz[,]>();
        public void Beolvas(string fajlnev)
        {
            using (StreamReader sr = new StreamReader(fajlnev))
            {
                while (!sr.EndOfStream)
                {
                    string elsosor = sr.ReadLine();
                    if (string.IsNullOrEmpty(elsosor))
                    {
                        continue; 
                    }

                    string[] meretek = elsosor.Split('x');
                    int oszlop = int.Parse(meretek[0]);
                    int sorok = int.Parse(meretek[1]);
                    Rekesz[,] polc = new Rekesz[sorok, oszlop];
                    for (int i = 0; i < sorok; i++)
                    {
                        string adatok = sr.ReadLine();
                        string[] rekeszAdatok = adatok.Split(';');
                        for (int j = 0; j < oszlop; j++)
                        {
                            string[] rekeszInfo = rekeszAdatok[j].Split('\t');
                            string nev = rekeszInfo[0];
                            double suly = double.Parse(rekeszInfo[1]);
                            polc[i, j] = new Rekesz(nev, suly);
                            
                        }
                    }
                    Polcok.Add(polc);
                }
            }
        }
    }
}
