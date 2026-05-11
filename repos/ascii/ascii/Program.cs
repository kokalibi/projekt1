using System;
using System.IO;

namespace ascii
{
    internal class Program
    {
        static string atalakit(string tomoritettSor)
        {
            string eredmeny = "";

            for (int i = 0; i < tomoritettSor.Length; i += 2)
            {
                int ism = int.Parse(tomoritettSor[i].ToString());
                char c = tomoritettSor[i + 1];

                eredmeny += new string(c, ism);
            }

            return eredmeny;
        }

        static int OsszesKarakter(string fajlNev)
        {
            string[] sorok = File.ReadAllLines(fajlNev);
            int osszeg = 0;
            foreach (string sor in sorok)
            {
                osszeg += sor.Length;
            }
            return osszeg;
        }

        static void Main(string[] args)
        {
            string[] sorok = File.ReadAllLines("konyv.txt");

            for (int i = 0; i < sorok.Length; i++)
            {
                Console.WriteLine(sorok[i]);
            }

            Console.WriteLine();
            Console.Write("Kérem adja meg az ismétlés számát: ");
            int be = int.Parse(Console.ReadLine());

            int maxHossz = 0;
            for (int i = 0; i < sorok.Length; i++)
            {
                if (sorok[i].Length > maxHossz)
                    maxHossz = sorok[i].Length;
            }

            for (int i = 0; i < sorok.Length; i++)
            {
                sorok[i] = sorok[i].PadRight(maxHossz);
            }

            Console.WriteLine();
            Console.WriteLine("Ismételt könyvek egymás mellett:\n");

            for (int i = 0; i < sorok.Length; i++)
            {
                for (int j = 0; j < be; j++)
                {
                    Console.Write(sorok[i] + "|");
                }
                Console.WriteLine();
            }

            string input = "szg_t.txt";
            string output = "szg.txt";

            string[] tomoritettSorok = File.ReadAllLines(input);
            string[] kicsomagoltSorok = new string[tomoritettSorok.Length];

            for (int i = 0; i < tomoritettSorok.Length; i++)
            {
                kicsomagoltSorok[i] = atalakit(tomoritettSorok[i]);
            }

            foreach (var sor in kicsomagoltSorok)
            {
                Console.WriteLine(sor);
            }

            File.WriteAllLines(output, kicsomagoltSorok);

            Console.WriteLine($"\nAz ábra elmentve a '{output}' fájlba.");

            Console.Write("\nKérem a tömörített fájl nevét: ");
            string tomoritettFajl = Console.ReadLine();

            Console.Write("Kérem a tömörítetlen fájl nevét: ");
            string tomoritetlenFajl = Console.ReadLine();

            int tomoritettKarakterek = OsszesKarakter(tomoritettFajl);
            int tomoritetlenKarakterek = OsszesKarakter(tomoritetlenFajl);

            Console.WriteLine($"\nA tömörített fájl karakterszáma: {tomoritettKarakterek}");
            Console.WriteLine($"A tömörítetlen fájl karakterszáma: {tomoritetlenKarakterek}");

            double arany = (double)tomoritettKarakterek / tomoritetlenKarakterek;
            Console.WriteLine($"\nA tömörítési arány: {arany:F2}");


            string[] konyvTomoritett = File.ReadAllLines("konyv_t.txt");

            int sorokSzama = konyvTomoritett.Length;
            int blokkokSzama = 0;
            int maxSzelesseg = 0;

            foreach (var sor in konyvTomoritett)
            {
                blokkokSzama += sor.Length / 2; 
                string kibontott = atalakit(sor);
                if (kibontott.Length > maxSzelesseg)
                    maxSzelesseg = kibontott.Length;
            }

            Console.WriteLine("\n--- Konyv_t.txt statisztika ---");
            Console.WriteLine($"Sorok száma: {sorokSzama}");
            Console.WriteLine($"Ábra szélessége: {maxSzelesseg} karakter");
            Console.WriteLine($"Blokkok száma: {blokkokSzama}");
            Console.ReadKey();
        }
    }
}
