
    class osztaly
    {
        public string datum { get; set; }
        public int[,] matrix { get; set; }
        public int sor=>matrix.GetLength(0);
        public int oszlop => matrix.GetLength(1);
        public osztaly(string bedatum, string[] bematrix)
        {
            this.datum = bedatum;
            int index = 0;
            List<int[]> list = new List<int[]>();
            while(index < bematrix.Length)
            {
                string[] darab = bematrix[index].Split(',');
                int[] darab2 = new int[darab.Length];
                for (int i = 0; i < darab.Length; i++)
                {
                    darab2[i] = int.Parse(darab[i]);
                }
                list.Add(darab2);
                index++;
            }
            matrix = new int[list.Count, list[0].Length];
            for (int i = 0; i < list.Count; i++)
            {
                for (int j = 0; j < list[i].Length; j++)
                {
                    matrix[i, j] = list[i][j];
                }
            }
        }
    }

