


    
            // Feltételezzük, hogy a fájl első sora a céltábla középpontja (X;Y)
            // Ha a feladatban ez fix (pl. 500;500), írja át a változókat!
            double celX = 0, celY = 0;
            List<JatekosLovese> lovesek = new List<JatekosLovese>();

            try
            {
                string[] sorok = File.ReadAllLines("lovesek.txt");
                // Az első sor a céltábla adatait tartalmazza
                string[] celAdat = sorok[0].Split(';');
                celX = double.Parse(celAdat[0]);
                celY = double.Parse(celAdat[1]);

                // A 2. sortól (index: 1) vannak a lövések
                for (int i = 1; i < sorok.Length; i++)
                {
                    lovesek.Add(new JatekosLovese(sorok[i], i));
                }
            }
            catch (Exception e) { Console.WriteLine("Hiba: " + e.Message); return; }

            // 5. feladat
            Console.WriteLine($"5. feladat: Lövések száma: {lovesek.Count} db");

            // 7. feladat: Legpontosabb lövés (minimum távolság)
            var legpontosabb = lovesek.OrderBy(l => l.Tavolsag(celX, celY)).First();
            Console.WriteLine($"7. feladat: Legpontosabb lövés:\n\tSorszám: {legpontosabb.Sorszam}\n\tNév: {legpontosabb.Nev}\n\tX: {legpontosabb.X}\n\tY: {legpontosabb.Y}\n\tTávolság: {legpontosabb.Tavolsag(celX, celY)}");

            // 9. feladat: Nulla pontos lövések
            int nullaPontosak = lovesek.Count(l => l.Pontszam(celX, celY) == 0);
            Console.WriteLine($"9. feladat: Nulla pontos lövések száma: {nullaPontosak} db");

            // 10. feladat: Játékosok száma
            int jatekosokSzama = lovesek.Select(l => l.Nev).Distinct().Count();
            Console.WriteLine($"10. feladat: Játékosok száma: {jatekosokSzama}");

            // 11-12. feladat: Statisztika (Lövésszám és Átlagpontszám)
            Console.WriteLine("11-12. feladat: Statisztika és átlagpontok:");
            var statisztika = lovesek.GroupBy(l => l.Nev)
                                     .Select(g => new {
                                         Nev = g.Key,
                                         Db = g.Count(),
                                         Atlag = g.Average(l => l.Pontszam(celX, celY))
                                     });

            foreach (var s in statisztika)
            {
                Console.WriteLine($"\t{s.Nev} - Lövések: {s.Db} db, Átlag: {s.Atlag:F2}");
            }

            // 13. feladat: Nyertes meghatározása
            var nyertes = statisztika.OrderByDescending(s => s.Atlag).First();
            Console.WriteLine($"13. feladat: A játék nyertese: {nyertes.Nev}");