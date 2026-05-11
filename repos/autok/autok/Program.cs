List<adat> lista = new List<adat>();
foreach (var item in File.ReadAllLines("jeladas.txt"))
{
        lista.Add(new adat(item));
}

