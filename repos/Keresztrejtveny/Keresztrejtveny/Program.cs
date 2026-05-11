KeresztrejtvenyRacs m = new KeresztrejtvenyRacs("kr2.txt");
Console.WriteLine("5. feladat: A keresztrejvény mérete");
Console.WriteLine($"\tSorok száma: {m.SorokDb}");
Console.WriteLine($"\tOszlopok száma: {m.OszlopokDb}");
Console.WriteLine("6. feladat: A beolvasott keresztrejtvény");
m.KiirKeresztejtveny();
Console.WriteLine($"7. feladat: A leghosszabb függ.: {m.LeghosszabbFuggolegesSzo} karakter");


Console.WriteLine("8. feladat: Vízszintes szavak statisztikája");
m.KiirStatisztika();

Console.WriteLine("9. feladat: A keresztrejtvény számokkal");
m.KiirKeresztejtvenySzámokkal();
