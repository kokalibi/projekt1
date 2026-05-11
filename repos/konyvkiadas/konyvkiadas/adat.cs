
    internal class adat
    {
    public int ev { get; set; }
    public int negyedev { get; set; }
    public string erdet { get; set; }
    public string szerzo {  get; set; }
    public string konyv { get; set; }
    public int peldany { get; set; }

    public adat(string sor) 
    {
        string[] v = sor.Split(';');
        ev = int.Parse(v[0]);
        negyedev = int.Parse(v[1]);
        erdet = v[2];
        if (v[3].Contains(": "))
        {
            string[] v2 = v[3].Split(": ");
            szerzo = v2[0];
            konyv = v2[1];
        }
        if (v[3].Contains(" (")) {
        
            string[] v2= v[3].Split(" (");
            konyv = v2[0];
            szerzo = v2[1].Substring(0, v2[1].Length - 1);

        }
         
        peldany = int.Parse(v[4]);  
    }
}

