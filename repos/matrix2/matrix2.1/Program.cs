string fajl = "matrix.txt";

// Meghívjuk a beolvasót és eltároljuk az eredményt
int[,] kapottMatrix = beolvaso.MatrixBetoltes(fajl);

// Kiíratás a főprogramban
Console.WriteLine($"Sikeres beolvasás! Méret: {kapottMatrix.GetLength(0)}x{kapottMatrix.GetLength(1)}");

for (int i = 0; i < kapottMatrix.GetLength(0); i++)
{
    for (int j = 0; j < kapottMatrix.GetLength(1); j++)
    {
        Console.Write(kapottMatrix[i, j] + "\t");
    }
    Console.WriteLine();
}