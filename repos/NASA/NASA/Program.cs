// 4. feladat: Beolvasás
List<Adat> adatok = new List<Adat>();
foreach (string sor in File.ReadAllLines("NASAlog.txt"))
{
    adatok.Add(new Adat(sor));
}

// 5. feladat: Kérések száma
Console.WriteLine($"5. feladat: Kérések száma: {adatok.Count} db");

// 6. feladat: Összes méret
long osszMeret = 0; // Használj long-ot az összegzéshez a biztonság kedvéért!
foreach (var adat in adatok)
{
    osszMeret += adat.ByteMeret();
}
Console.WriteLine($"6. feladat: Válaszok összes mérete: {osszMeret} byte");

// 8. feladat: Domain arány
int domainDb = 0;
foreach (var adat in adatok)
{
    if (adat.Domain()) domainDb++;
}
double arany = (double)domainDb / adatok.Count * 100;
Console.WriteLine($"8. feladat: Domain kérések: {arany:F2}%");

// 9. feladat: Statisztika (Állapotkódok)
Dictionary<string, int> statisztika = new Dictionary<string, int>();
foreach (var adat in adatok)
{
    if (statisztika.ContainsKey(adat.Kod))
        statisztika[adat.Kod]++;
    else
        statisztika[adat.Kod] = 1;
}

Console.WriteLine("9. feladat: Statisztika:");
foreach (var par in statisztika)
{
    Console.WriteLine($"    {par.Key}: {par.Value} db");
}