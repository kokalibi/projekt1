internal class JatekosLovese
{
    public string Nev { get; private set; }
    public double X { get; private set; }
    public double Y { get; private set; }
    public int Sorszam { get; private set; }

    public JatekosLovese(string sor, int sorszam)
    {
        string[] adatok = sor.Split(';');
        this.Nev = adatok[0];
        this.X = double.Parse(adatok[1]);
        this.Y = double.Parse(adatok[2]);
        this.Sorszam = sorszam;
    }

    // 6. feladat: Tavolsag metódus (Pitagorasz-tétel)
    public double Tavolsag(double cX, double cY)
    {
        double dx = cX - this.X;
        double dy = cY - this.Y;
        return Math.Sqrt(Math.Pow(dx, 2) + Math.Pow(dy, 2));
    }

    // 8. feladat: Pontszam metódus kerekítéssel
    public double Pontszam(double cX, double cY)
    {
        double p = 10 - Tavolsag(cX, cY);
        if (p < 0) return 0;
        return Math.Round(p, 2);
    }
}