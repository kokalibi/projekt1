List<Versenyző> versenyzok = new List<Versenyző>();
foreach (string sor in File.ReadLines("Selejtezo2012.txt").Skip(1))
{
    versenyzok.Add(new Versenyző(sor));
}
//5
Console.WriteLine("5. feladat: Versenyzők száma selejtezőben: "+versenyzok.Count+" fő");
//6
int tovabb = 0;
foreach (var versenyzo in versenyzok)
{
    if (double.Parse(versenyzo.D1)>=78 || double.Parse(versenyzo.D2)>=78)
    {
        tovabb++;
    }
}
Console.WriteLine("6. feladat: 78,00 méter feletti eredménnyel továbbjutott: "+tovabb+" fő");
//9
double legnagyobb = 0;

foreach (Versenyző v in versenyzok)
{
    if (v.Eredmény > legnagyobb)
    {
        legnagyobb = v.Eredmény;
    }
}
foreach (Versenyző v in versenyzok)
{
    if (v.Eredmény == legnagyobb)
    {
        Console.WriteLine("9. feladat: A selejtező nyertese:");
        Console.WriteLine($"\tNév: {v.nev}");
        Console.WriteLine($"\tCsoport: {v.csoport}");
        Console.WriteLine($"\tNemzet: {v.nemzet}");
        Console.WriteLine($"\tNemzet kód: {v.kod}");
        Console.WriteLine($"\tsorozat: {v.D1}; {v.D2}; {v.D3}");
        Console.WriteLine($"\tEredmény: {legnagyobb}");

    }
}

using (StreamWriter sw = new StreamWriter("Dontos2012.txt", false, System.Text.Encoding.UTF8))
{
    sw.WriteLine("Név;Csoport;Nemzet és kód;D1;D2;D3");

    for (int i = 0; i < 12; i++)
    {

        Versenyző legjobb = versenyzok[0];
        foreach (var v in versenyzok)
        {
            if (v.Eredmény > legjobb.Eredmény)
            {
                legjobb = v;
            }
        }


        string nemzetEsKod = string.IsNullOrEmpty(legjobb.kod) ? legjobb.nemzet : $"{legjobb.nemzet}({legjobb.kod})";

        sw.WriteLine($"{legjobb.nev};{legjobb.csoport};{nemzetEsKod};{legjobb.D1};{legjobb.D2};{legjobb.D3}");

        versenyzok.Remove(legjobb);
    }
}

