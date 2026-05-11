class KeresztrejtvenyRacs
{
    private List<string> Adatsorok;
    private char[,] Racs;
    private int[,] Sorszamok;
    public int SorokDb => Adatsorok.Count;
    public int OszlopokDb => Adatsorok[0].Length;


    private void BeolvasAdatsorok(string forras)
    {
        Adatsorok.AddRange(File.ReadAllLines(forras));
    }

    private void FeltoltRacs()
    {
        for (int r = 0; r < SorokDb; r++)
            for (int c = 0; c < OszlopokDb; c++) Racs[r + 1, c + 1] = Adatsorok[r][c];
    }

    private void SorszamokatMeghataroz()
    {
        int ssz = 1;
        for (int r = 1; r <= SorokDb; r++)
            for (int c = 1; c <= OszlopokDb; c++)
                if (Racs[r, c] == '-')
                {
                    if (Racs[r, c + 1] == '-' && (c == 1 || Racs[r, c - 1] == '#') ||
                        Racs[r + 1, c] == '-' && (r == 1 || Racs[r - 1, c] == '#'))
                    {
                        Sorszamok[r, c] = ssz++;
                    }
                }
    }

    public void KiirKeresztejtveny()
    {
        for (int r = 1; r <= SorokDb; r++)
        {
            Console.Write("\t");
            for (int c = 1; c <= OszlopokDb; c++)
            {
                if (Racs[r, c] == '#') Console.Write("##");
                else Console.Write("[]");
            }
            Console.WriteLine();
        }
    }

    public int LeghosszabbFuggolegesSzo
    {
        get
        {
            int maxHossz = 0;
            for (int c = 1; c <= OszlopokDb; c++)
            {
                int aktHossz = 0;
                for (int r = 1; r <= SorokDb; r++)
                {
                    if (Racs[r, c] == '-') aktHossz++;
                    if (Racs[r, c] == '#' || r == SorokDb)
                    {
                        if (aktHossz > maxHossz) maxHossz = aktHossz;
                        aktHossz = 0;
                    }
                }
            }
            return maxHossz;
        }
    }

    private Dictionary<int, int> StatisztikatKeszit
    {
        get
        {
            Dictionary<int, int> Stat = new Dictionary<int, int>();
            for (int r = 1; r <= SorokDb; r++)
            {
                int aktHossz = 0;
                for (int c = 1; c <= OszlopokDb; c++)
                {
                    if (Racs[r, c] == '-') aktHossz++;
                    if (Racs[r, c] == '#' || c == OszlopokDb)
                    {
                        if (Stat.ContainsKey(aktHossz)) Stat[aktHossz]++;
                        else Stat.Add(aktHossz, 1);
                        aktHossz = 0;
                    }
                }
            }
            return Stat;
        }
    }

    public void KiirStatisztika()
    {
        foreach (var e in StatisztikatKeszit.OrderBy(x => x.Key))
        {
            if (e.Key > 1) Console.WriteLine($"\t{e.Key} betűs: {e.Value} darab");
        }
    }


    public void KiirKeresztejtvenySzámokkal()
    {
        for (int r = 1; r <= SorokDb; r++)
        {
            Console.Write("\t");
            for (int c = 1; c <= OszlopokDb; c++)
            {
                if (Racs[r, c] == '#') Console.Write("##");
                else if (Sorszamok[r, c] == 0) Console.Write("[]");
                else Console.Write(Sorszamok[r, c].ToString("D2"));
            }
            Console.WriteLine();
        }
    }

    // 3. feladat: Konstruktor készítése és a kapcsoldó kódtagok kódolása
    public KeresztrejtvenyRacs(string forrás)
    {
        Adatsorok = new List<string>();
        BeolvasAdatsorok(forrás);
        Racs = new char[SorokDb + 2, OszlopokDb + 2];
        Sorszamok = new int[SorokDb + 2, OszlopokDb + 2];
        FeltoltRacs();
        SorszamokatMeghataroz();
    }
}