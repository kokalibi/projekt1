using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jelado
{
    internal class adatok
    {
        public int ora;
        public int perc;
        public int mp;
        public int x;
        public int y;

        public adatok(string sor)
        {
            string[] darabol = sor.Split(' ');
            ora= int.Parse(darabol[0]);
            perc= int.Parse(darabol[1]);
            mp= int.Parse(darabol[2]);
            x= int.Parse(darabol[3]);
            y= int.Parse(darabol[4]);
        }
    }
}
