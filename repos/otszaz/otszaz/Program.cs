using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace otszaz
{
    internal class Program
    {
        public int ertek(int darabszam)
        {
            int osszeg = 0;
            if (darabszam == 1)
            {
                osszeg = 500;
            }
            else if (darabszam == 2)
            {
                osszeg = 950;
            }
            if (darabszam>2)
            {
                osszeg = darabszam * 400 ;
            }
            return 0;
        }
        static void Main(string[] args)
        {
            List<string> list = new List<string>();
            using (var reader = new System.IO.StreamReader("penztar.txt"))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    list.Add(line);
                }
            }
            //2. feladat

            int sum = 0;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].Contains("F"))
                {
                    sum+=1;

                }
            }
            Console.WriteLine("2. feladat: Fizető vásárlók száma: {0} fő", sum);

            //3. feladat
            int elsodb=0;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].Contains("F"))
                {
                    break;
                }
                else { elsodb+=1; }
            }
            Console.WriteLine("3. feladat: Az első fizető vásárló előtt {0} vásárló volt.", elsodb);
            //4. feladat
            
            Console.WriteLine("4. feladat: Kérem a vásárló sorszámát:");
            int sorszam = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("adja meg a vásárolt cikk sorszámát:");
            int cikk = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("kerem a db szamot:");
            int db = Convert.ToInt32(Console.ReadLine());
            //5. feladat
            int vsorszam = 0;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].Contains("F"))
                {
                    vsorszam += 1;
                }
                if (list[i]==cikk.ToString())
                {
                    break;
                }
            }
            Console.WriteLine("5. feladat: Az elso vasarlo", vsorszam);
            list.Reverse();
            vsorszam = 0;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].Contains("F"))
                {
                    vsorszam += 1;
                }
                if (list[i] == cikk.ToString())
                {
                    break;
                }
            }
            Console.WriteLine("Az utolsó vásárló sorszáma: ", db-vsorszam);

            int vasarloDb = 0;
            bool voltVasarlo = true;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i].Contains("F"))
                {
                    voltVasarlo = true;
                }
                else
                {
                    if (voltVasarlo)
                    {
                        vasarloDb += 1;
                        voltVasarlo = false;
                    }
                }
            }
            Console.WriteLine("5. feladat: Vásárlók száma: {0} fő", vasarloDb);

            //6. feladat


            Console.ReadKey();
        }
    }
}
