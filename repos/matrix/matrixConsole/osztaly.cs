class osztaly
{
    public string Datum { get; set; }
    public int[,] Matrix { get; set; }
    public int Sor => Matrix.GetLength(0);
    public int Oszlop => Matrix.GetLength(1);

    public osztaly(string datum)
    {
        this.Datum = datum;
    }

    public void MatrixBeallit(List<int[]> lista)
    {
        int sorokszama = lista.Count;
        int oszlopokszama = lista[0].Length;
        Matrix = new int[sorokszama, oszlopokszama];

        for (int i = 0; i < sorokszama; i++)
        {
            for (int j = 0; j < oszlopokszama; j++)
            {
                Matrix[i, j] = lista[i][j];
            }
        }
    }
}