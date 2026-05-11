internal class Adat
{
    public string Cim { get; set; }
    public string Ido { get; set; }
    public string Kep { get; set; }
    public string Kod { get; set; }
    public string Meret { get; set; }

    public Adat(string adatsor)
    {
        string[] adatok = adatsor.Split('*');
        Cim = adatok[0];
        Ido = adatok[1];
        Kep = adatok[2];
        string[] vag = adatok[3].Split(' ');
        Kod = vag[0];
        Meret = vag[1];
    }

    // 6. feladat: 32 bites egész (int), hibakezeléssel
    public int ByteMeret()
    {
        if (int.TryParse(Meret, out int eredmeny)) return eredmeny;
        return 0; // Ha "-" van a fájlban, 0-t ad vissza
    }

    // 7. feladat: Domain ellenőrzés
    public bool Domain()
    {
        // Ha az utolsó karakter NEM számjegy, akkor domain név
        return !char.IsDigit(Cim.Last());
    }
}