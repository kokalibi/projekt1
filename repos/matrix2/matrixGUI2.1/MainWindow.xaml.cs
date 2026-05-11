using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.IO;

namespace matrixGUI2._1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<szinhaz> szinhazak = new List<szinhaz>();
        public MainWindow()
        {
            InitializeComponent();
            string[] beadatok = File.ReadAllLines("forras.txt");
            int index = 0;
            while (index < beadatok.Length)
            {
                string datum = beadatok[index];
                index++;
                List<string> adatok = new List<string>();
                while (index < beadatok.Length && !beadatok[index].Contains("."))
                {
                    adatok.Add(beadatok[index]);
                    index++;
                }
                szinhaz uj = new szinhaz(datum, adatok.ToArray());
                szinhazak.Add(uj);
            }
            foreach (var item in szinhazak)
            {
                ListBoxItem uj = new ListBoxItem();
                uj.Content = item.datum;
                datum.Items.Add(uj);
            }
        }

        private void datum_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            racs.Children.Clear();
            szinhaz kivalasztott = szinhazak[datum.SelectedIndex];
            int sor = kivalasztott.sor;
            int oszlop = kivalasztott.oszlop;
            for (int i = 0; i < sor; i++)
            {
                for (int j = 0; j < oszlop; j++)
                {
                    int ertek = kivalasztott.matrix[i, j];
                    Button uj = new Button
                    {
                        Content = ertek == 0 ? "Szabad" : "Foglalt",
                        Margin = new Thickness(2),
                        Background = ertek == 0 ? Brushes.LightGreen : Brushes.LightCoral,
                        Tag=(sor:i, oszlop:j)
                        
                        
                    };
                    uj.Click += (s, args) =>
                    {
                        Button gomb = s as Button;
                        var (sor, oszlop) = ((int sor, int oszlop))gomb.Tag;
                        if (kivalasztott.matrix[sor, oszlop] == 0)
                        {
                            kivalasztott.matrix[sor, oszlop] = 1;
                            gomb.Content = "Foglalt";
                            gomb.Background = Brushes.LightCoral;
                        }
                        else
                        {
                            kivalasztott.matrix[sor, oszlop] = 0;
                            gomb.Content = "Szabad";
                            gomb.Background = Brushes.LightGreen;
                        }
                    };
                    racs.Children.Add(uj);
                }
            }
        }

        private void mentes_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                List<string> kimenet = new List<string>();

                foreach (var sz in szinhazak)
                {
                    kimenet.Add(sz.datum);

                    for (int i = 0; i < sz.sor; i++)
                    {
                        List<int> sorElemek = new List<int>();
                        for (int j = 0; j < sz.oszlop; j++)
                        {
                            sorElemek.Add(sz.matrix[i, j]);
                        }
                        kimenet.Add(string.Join(",", sorElemek));
                    }
                }
                 
                // 3. Fájlba írás (felülírja az eredetit)
                File.WriteAllLines("forras.txt", kimenet);

                MessageBox.Show("A mentés sikeresen megtörtént!", "Mentés", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Hiba történt a mentés során: {ex.Message}", "Hiba", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }
    }
}