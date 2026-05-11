
    internal class adat
    {
        public string rendszam {  get; set; }
        public int ora { get; set; }
        public int perc { get; set; }
        public int sebesseg { get; set; }

        public adat(string sor)
        {
            string[] s = sor.Split('\t');
            rendszam = s[0];
            ora = int.Parse(s[1]);
            perc = int.Parse(s[2]);
            sebesseg = int.Parse(s[3]);
        }
    }

