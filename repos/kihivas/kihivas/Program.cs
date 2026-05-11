using System;

namespace kihivas
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("1. feladat");
            Console.Write("Adja meg az aktivitását: ");
            string teljesitmeny = Console.ReadLine();
            int szumU = 0;
            int szumG = 0;
            int szumF = 0;
            int szumK = 0;
            foreach (var betu in teljesitmeny)
            {
                switch (betu)
                {
                    case 'U':
                        szumU += 1;
                        break;
                    case 'G':
                        szumG += 1;
                        break;
                    case 'F':
                        szumF += 2;
                        break;
                    case 'K':
                        szumK += 10;
                        break;
                }
            }
            Console.WriteLine("2. feladat");
            int osszesen = szumU + szumG + szumF + szumK;
            Console.WriteLine("Az elért távolság: {0} km.", osszesen);
            Console.WriteLine("3. feladat");
            int jutalom = 0;
            if (szumU == 0 || szumG == 0 || szumF == 0 || szumK == 0)
            {
                Console.WriteLine("Nem jár jutalom.");
            }
            else
            {
                jutalom = 10;
                Console.WriteLine("Bravó! Jutalma még 10 km.");
            }
            Console.WriteLine("4. feladat");
            Console.Write("Eredménye: {0} km. ", osszesen + jutalom);
            Console.WriteLine((osszesen + jutalom >= 40) ? "Gratulálok, kihívás teljesítve!" :
                            "Legközelebb sikerül!");
        }
    }
}
