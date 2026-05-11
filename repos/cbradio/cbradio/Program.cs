using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace cbradio
{
    internal class Program
    {
        public class Radio
        {
            public int Ora {get; set; }
            public int Perc { get; set; }
            public int Adas { get; set; }
            public string Nev { get; set; }
            public Radio(string sor)
            {
                string[] adatok = sor.Split(';');
                Ora = int.Parse(adatok[0]);
                Perc = int.Parse(adatok[1]);
                Adas = int.Parse(adatok[2]);
                Nev = adatok[3];
            }
        }
        public static int AtszamolPercre(int ora, int perc)
        {

            return (ora*60+perc);
        }
        static void Main(string[] args)
        {
            List<Radio> lista = new List<Radio>();
            string[] sorok = System.IO.File.ReadAllLines("cb.txt");
            for (int i = 1; i < sorok.Length; i++)
            {
                lista.Add(new Radio(sorok[i]));

            }
            Console.WriteLine("3. feladat: Bejegyzések száma: " + lista.Count + " db");
            //4
            bool talalat = false;
            foreach (Radio radio in lista)
            {
                if (radio.Adas == 4)
                {
                    Console.WriteLine("4. feladat: Volt négy adást indító sofőr.");
                    talalat = true;
                    break;
                }
            }
            if (!talalat)
            {
                Console.WriteLine("4. feladat: Nem volt négy adást indító sofőr.");
            }
            //5
            Console.Write("5. feladat: Kérek egy nevet: ");
            string beNev = Console.ReadLine();
            int hivdb = 0;
            bool talaltnev = false;
            foreach (var item in lista)
            {
                if (item.Nev == beNev)
                {
                    hivdb += item.Adas;
                    talaltnev = true;
                }
            }
            if (!talaltnev)
            {
                Console.WriteLine("\tNincs ilyen nevű sofőr!");
            }
            else {
                Console.WriteLine($"\t{beNev} {hivdb}x használta a CB-rádiót");
                    }
            //7
            List<string> kiadat = new List<string>();
            kiadat.Add("Idő;Név;Adások száma");
            foreach (Radio item in lista)
            {
     
                string sor = $"{AtszamolPercre(item.Ora,item.Perc)};{item.Nev};{item.Adas}";
                kiadat.Add(sor);
                
                
            }
            File.WriteAllLines("cb2.txt", kiadat);
            //8
            List<string> nevek = new List<string>();
            foreach (Radio item in lista)
            {
                if (!nevek.Contains(item.Nev))
                {
                    nevek.Add(item.Nev);
                }
            }
            Console.WriteLine("8. feladat: Sofőrök száma: " + nevek.Count+" fő");
            //9
            int maxadas = 0;
            string maxnev = "";
            foreach (string nev in nevek)
            {
                int adatossz = 0;
                foreach (var alapadat in lista)
                {
                    if(nev==alapadat.Nev)
                    {
                        adatossz += alapadat.Adas;
                    }
                }
                if (maxadas<adatossz)
                {
                    maxnev = nev;
                    maxadas = adatossz;
                }
            }
            Console.WriteLine("9. feladat: Legtöbb adást indító sofőr");
            Console.WriteLine($"\tNév: {maxnev}");
            Console.WriteLine($"\tAdások száma: {maxadas} alkalom");
        }
    }
}
