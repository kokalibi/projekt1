
List<beszelgetes> beszelgetesek = new List<beszelgetes>();
foreach (var sor in File.ReadAllLines("csevegesek.txt").Skip(1))
    {
        beszelgetesek.Add(new beszelgetes(sor));
    }
HashSet<string> tagok = new HashSet<string>();
foreach (var tag in File.ReadAllLines("tagok.txt")) tagok.Add(tag);

Console.WriteLine($"4. feladat: Tagok száma: {tagok.Count}fő - Beszélgetések: {beszelgetesek.Count}db");

Console.WriteLine($"5. feladat: Leghosszabb beszélgetés adatai");
beszelgetes maxHosszBeszelgetes = beszelgetesek[0];
foreach (var e in beszelgetesek)
    {
        if (e.ElteltIdo > maxHosszBeszelgetes.ElteltIdo)
        {
            maxHosszBeszelgetes = e;
        }
    }
Console.WriteLine($"\tKezdeményező: {maxHosszBeszelgetes.Kezdemenyezo}");
Console.WriteLine($"\tFogadó:       {maxHosszBeszelgetes.Fogado}");
Console.WriteLine($"\tKezdete:      {maxHosszBeszelgetes.Kezdete.ToString("yy.MM.dd-HH:mm:ss")}");
Console.WriteLine($"\tVége:         {maxHosszBeszelgetes.Vege.ToString("yy.MM.dd-HH:mm:ss")}");
Console.WriteLine($"\tHossz:        {maxHosszBeszelgetes.ElteltIdo.TotalSeconds}mp");

Console.Write("6. feladat: Adja meg egy tag nevét: ");
string inputTag = Console.ReadLine();
TimeSpan szumIdo = new TimeSpan();
foreach (var e in beszelgetesek)
    {
        if (e.Kezdemenyezo == inputTag || e.Fogado == inputTag)
        {
            szumIdo += e.ElteltIdo;
        }
    }
Console.WriteLine($"\tA beszélgetések összes ideje: {szumIdo}");

Console.WriteLine("7. feladat: Nem beszélgettek senkivel");
HashSet<string> beszelgetok = new HashSet<string>();
foreach (var e in beszelgetesek)
    {
        beszelgetok.Add(e.Kezdemenyezo);
        beszelgetok.Add(e.Fogado);
    }
foreach (var e in tagok.Except(beszelgetok)) Console.WriteLine($"\t{e}");

Console.WriteLine("8. feladat: Leghosszabb csendes időszak 15h-tól");
DateTime maxCsendKezdete = new DateTime(2021, 9, 27, 15, 0, 0);
DateTime maxCsendVege = beszelgetesek[0].Kezdete;
TimeSpan maxCsendHossz = maxCsendVege - maxCsendKezdete;
DateTime aktCsendVege = beszelgetesek[0].Vege;

foreach (var b in beszelgetesek.Skip(1))
    {
        if (b.Kezdete > aktCsendVege)   // Ha csend van:
            {
            TimeSpan aktCsendHossz = b.Kezdete - aktCsendVege;
            if (aktCsendHossz > maxCsendHossz)
                {
                    maxCsendHossz = aktCsendHossz;
                    maxCsendKezdete = aktCsendVege;
                    maxCsendVege = b.Kezdete;
                }
            }
        if (b.Vege > aktCsendVege) aktCsendVege = b.Vege;
    }
Console.WriteLine($"\tKezdete: {maxCsendKezdete.ToString("yy.MM.dd-HH:mm:ss")}");
Console.WriteLine($"\tVége:    {maxCsendVege.ToString("yy.MM.dd-HH:mm:ss")}");
Console.WriteLine($"\tHossza:  {maxCsendHossz}");
