using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vezerlo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random veletlen = new Random();
            int aktualis = veletlen.Next(0, 11);
            int cel = veletlen.Next(0, 11);
            string irany = "-";
            if (aktualis == cel)
            {
                irany = "-";
            }
            else if (aktualis > cel)
            {
                irany = "L";
            }
            else if (aktualis < cel)
            {
                irany = "F";
            }
            Console.WriteLine("Aktuális: " + aktualis + " " + irany + " (" + cel + ") ");
            //2
            Console.WriteLine("Adja meg a szintet, ahonnan hívja a liftet! Szint: ");
            int szint = Convert.ToInt32(Console.ReadLine());
            //3
            int mozgas = 0;
            if ((szint < cel && szint > aktualis) || (szint > cel && szint < aktualis)) mozgas = Math.Abs(cel - aktualis);
            else
            {
                mozgas = Math.Abs(aktualis - cel) + Math.Abs(szint - cel);
            }
            Console.WriteLine("A lift " + mozgas + " szintet fog mozogni.");
        }
    }
}
