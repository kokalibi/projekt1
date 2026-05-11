List<adat> adatok = new List<adat>();
foreach (var sor in File.ReadAllLines("kiadas.txt"))
{
    adatok.Add(new adat(sor));
}

int db = 0;

Console.WriteLine("2. feladat:");
Console.Write("szerző: ");
string szerzo = Console.ReadLine();
foreach (adat item in adatok)
{
    if (item.szerzo == szerzo)
    {
        db++;
    }
}
if (db == 0) Console.WriteLine("Nem adtak ki");
else Console.WriteLine($"{db} könyvkiadás");

//3

int max = 0;
foreach (adat item in adatok)
{
    if (item.peldany > max)
    {
        max = item.peldany;
    }
}
int maxdb = 0;
foreach (adat item in adatok)
{
    if (item.peldany == max)
    {
        maxdb++;

    }
}
Console.WriteLine("3. feladat:");
Console.WriteLine($"Legnagyobb példányszám: {max}, előfordult {maxdb} alkalommal");

//4

foreach (adat item in adatok)
{
    if (item.peldany >=40000 && item.erdet == "kf")
    {
        Console.WriteLine("4. feladat:");
        Console.WriteLine($"{item.ev}/{item.negyedev}, {item.szerzo}: {item.konyv}");
        break;
    }
}
//5
Console.WriteLine("5. feladat:");
 Console.WriteLine("Év\tMagyar kiadás\tMagyar példányszám\tKülföldi kiadás\tKülföldi példányszám"); 

var evek = adatok.Select(a => a.ev).Distinct().OrderBy(e => e);
List<string> htmlSorok = new List<string>();

foreach (var ev in evek)
{
    var evesAdatok = adatok.Where(a => a.ev == ev).ToList();

    int maDb = evesAdatok.Count(a => a.erdet == "ma");
    long maPeldany = evesAdatok.Where(a => a.erdet == "ma").Sum(a => (long)a.peldany);

    int kfDb = evesAdatok.Count(a => a.erdet == "kf");
    long kfPeldany = evesAdatok.Where(a => a.erdet == "kf").Sum(a => (long)a.peldany);

    Console.WriteLine($"{ev}\t{maDb}\t{maPeldany}\t{kfDb}\t{kfPeldany}");

    htmlSorok.Add($"<tr><td>{ev}</td><td>{maDb}</td><td>{maPeldany}</td><td>{kfDb}</td><td>{kfPeldany}</td></tr>");
}


string htmlTable = "<table>\n" +
                   "<tr><th>Év</th><th>Magyar kiadás</th><th>Magyar példányszám</th><th>Külföldi kiadás</th><th>Külföldi példányszám</th></tr>\n" +
                   string.Join("\n", htmlSorok) +
                   "\n</table>";
File.WriteAllText("tabla.html", htmlTable);

//6
Console.WriteLine("6. feladat:");
Console.WriteLine("Legalább kétszer, nagyobb példányszámban újra kiadott könyvek:");


var konyvekCsoportositva = adatok.GroupBy(a => new { a.szerzo, a.konyv });

foreach (var csoport in konyvekCsoportositva)
{

    var kiadasok = csoport.OrderBy(a => a.ev).ThenBy(a => a.negyedev).ToList();


    if (kiadasok.Count >= 3)
    {
        int elsoPeldany = kiadasok[0].peldany;

        bool mindNagyobb = kiadasok.Skip(1).All(k => k.peldany > elsoPeldany);

        if (mindNagyobb)
        {

            Console.WriteLine($"{csoport.Key.szerzo}: {csoport.Key.konyv}");
        }
    }
}