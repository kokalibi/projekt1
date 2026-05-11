using System.Globalization;

class beszelgetes
{
    public DateTime Kezdete { get; private set; }
    public DateTime Vege { get; private set; }
    public string Kezdemenyezo { get; private set; }
    public string Fogado { get; private set; }
    public TimeSpan ElteltIdo => Vege - Kezdete;
    public beszelgetes(string sor)
    {
        string[] m = sor.Split(';');
        Kezdete = DateTime.ParseExact(m[0], "yy.MM.dd-HH:mm:ss", CultureInfo.InvariantCulture);
        Vege = DateTime.ParseExact(m[1], "yy.MM.dd-HH:mm:ss", CultureInfo.InvariantCulture);
        Kezdemenyezo = m[2];
        Fogado = m[3];
    }
}