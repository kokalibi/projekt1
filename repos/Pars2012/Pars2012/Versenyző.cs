using System;
using System.Globalization;
using System.Linq;

internal class Versenyző
{
    public string nev { get; set; }
    public string csoport { get; set; }
    public string nemzet { get; set; }
    public string kod { get; set; }
    public string D1 { get; set; }
    public string D2 { get; set; }
    public string D3 { get; set; }

    public double Eredmény
    {
        get
        {


            double d1 = double.Parse(D1);
            double d2 = double.Parse(D2);
            double d3 = double.Parse(D3);

            double max = d1;
            if (d2 > max) max = d2;
            if (d3 > max) max = d3;

            return max;
        }
    }

    public Versenyző(string sor)
    {
        string[] adatok = sor.Split(';');
        nev = adatok[0];
        csoport = adatok[1];

        if (adatok[2].Contains('('))
        {
            string[] nemzetKod = adatok[2].Split('(');
            nemzet = nemzetKod[0];
            kod = nemzetKod[1].TrimEnd(')');
        }
        else
        {
            nemzet = adatok[2];
            kod = "";
        }

        if (adatok[3].Contains("X"))
        {
            D1 = adatok[3].Replace("X", "-1,0");
        }
        else if (adatok[3].Contains("-"))
        {
            D1 = adatok[3].Replace("-", "-2,0");
        }
        else
        {
            D1 = adatok[3];
        }
        if (adatok[4].Contains("X"))
        {
            D2 = adatok[4].Replace("X", "-1,0");
        }
        else if (adatok[4].Contains("-"))
        {
            D2 = adatok[4].Replace("-", "-2,0");
        }
        else
        {
            D2 = adatok[4];
        }
        if (adatok[5].Contains("X"))
        {
            D3 = adatok[5].Replace("X", "-1,0");
        }
        else if (adatok[5].Contains("-"))
        {
            D3 = adatok[5].Replace("-", "-2,0");
        }
        else
        {
            D3 = adatok[5];
        }
    }
}