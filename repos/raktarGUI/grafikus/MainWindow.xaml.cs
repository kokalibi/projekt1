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
using osztaly;

namespace grafikus
{
    public partial class MainWindow : Window
    {
        public Raktar Aktualis = new Raktar();
        public bool NevMod=true;
        public MainWindow()
        {
            InitializeComponent();
            Aktualis.Beolvas("forras.txt");
            foreach (var item in Aktualis.Polcok)
            {
                cmbPolcok.Items.Add(item);
            }
        }

        private void cmbPolcok_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            btnNev.IsEnabled = true;
            btnSuly.IsEnabled = true;
            Megjelenit();
        }
        private void Megjelenit()
        {
            var polc = (Rekesz[,])cmbPolcok.SelectedItem;
            int sor = polc.GetLength(0);
            int oszlop = polc.GetLength(1);
            Racs.Children.Clear();
            Racs.Rows = sor;
            Racs.Columns = oszlop;
            for (int i = 0; i < sor; i++)
            {
                for (int j = 0; j < oszlop; j++)
                {
                    TextBlock cella = new TextBlock
                    {
                        Text = NevMod ? polc[i, j].Nev : polc[i, j].Suly.ToString(),
                        HorizontalAlignment = HorizontalAlignment.Center,
                        VerticalAlignment = VerticalAlignment.Center
                    };
                    var aktualisRekesz = polc[i, j];
                    string kiirando =NevMod? aktualisRekesz.Nev : aktualisRekesz.Suly.ToString();
                    cella.Text = kiirando;
                    Racs.Children.Add(cella);
                }
            }
        }

        private void btnNev_Click(object sender, RoutedEventArgs e)
        {
            NevMod = true;
            Megjelenit();
        }

        private void btnSuly_Click(object sender, RoutedEventArgs e)
        {
            NevMod = false;
            Megjelenit();
        }
    }
}