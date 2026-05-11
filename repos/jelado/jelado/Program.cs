using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace jelado
{
    internal class Program
    {
        //3
        public static int eltelt(int ora2, int perc2, int mp2, int ora1, int perc1, int mp1)
        {
            return ((ora1*60*60+perc1*60+mp1)-(ora2*60*60+perc2*60+mp2));
        }
        static void Main(string[] args)
        {
            List<adatok> lista = new List<adatok>();
            foreach (string item in File.ReadLines("jel.txt"))
            {
                lista.Add(new adatok(item));
            }
            //2
            Console.Write("adja meg a sorszámát! ");
            int sorszam = int.Parse(Console.ReadLine());
            Console.WriteLine($"x={lista[sorszam - 1].x} y={lista[sorszam - 1].y}");

            //4

            int db = lista.Count() - 1;

            int aktualis = eltelt(lista[0].ora, lista[0].perc, lista[0].mp, lista[db].ora, lista[db].perc, lista[db].mp);
            int kiora = aktualis / 3600;
            int kiperc = (aktualis - kiora * 3600) / 60;
            int kimp = aktualis - kiora * 3600 - kiperc * 60;
            Console.WriteLine($"idotartam: {kiora}:{kiperc}:{kimp}");
            //5
            int kisx = 10000;
            int kisy = 10000;
            int nagyx = -10000;
            int nagyy = -10000;

            foreach (adatok item in lista)
            {
                if (item.x < kisx)
                {
                    kisx = item.x;
                }
                if (item.x > nagyx)
                {
                    nagyx = item.x;
                }
                if (item.y < kisy)
                {
                    kisy = item.y;
                }
                if (item.y > nagyy)
                {
                    nagyy = item.y;
                }
            }
            Console.WriteLine($"bal aslo:{kisx} {kisy} jobb felso: {nagyx} {nagyy}");

            //6
            double tavolsag = 0;

            for (int i = 0; i < db; i++)
            {
                tavolsag += Math.Sqrt((lista[i].x - lista[i + 1].x) * (lista[i].x - lista[i + 1].x) + (lista[i].y - lista[i + 1].y) * (lista[i].y - lista[i + 1].y));
            }
            Console.WriteLine(tavolsag);
            //7
            List<string> kiir = new List<string>();
            for (int i = 0;i <= db; i++)
            { 
                int mennyi = 0;
                int elteltido = eltelt(lista[i - 1].ora, lista[i - 1].perc, lista[i - 1].mp, lista[i].ora, lista[i].perc, lista[i].mp);
                if (elteltido > 300)
                {
                    mennyi = elteltido / 300;
                }
                int kordinata = 0;
                int kordinatax = 0;
                int kordinatay = 0;
                if (Math.Abs(lista[i].x-lista[i - 1].x) > 10)
                {
                    kordinatax = Math.Abs(lista[i].x - lista[i - 1].x) / 10;
                }
                if (Math.Abs(lista[i].y - lista[i - 1].y) > 10)
                {
                    kordinatay = Math.Abs(lista[i].y - lista[i - 1].y) / 10;
                }
                if(kordinatax>kordinatay) kordinata = kordinatax;
                else kordinata = kordinatay;
                if (mennyi!=0 || kordinata != 0)
                {
                    if (mennyi > kordinata)
                    {
                        string kisor = $"{lista[i].ora} {lista[i].perc} {lista[i].mp} idoelteres {mennyi-1}";
                        kiir.Add(kisor);
                    }
                    else
                    {
                        string kisor = $"{lista[i].ora} {lista[i].perc} {lista[i].mp} kordinata elteres {kordinata-1}";
                        kiir.Add(kisor);
                    }
                }
            }
            File.WriteAllLines("kimaradt.txt", kiir);
        }
    }
}
