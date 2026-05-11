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
using osztaly;

namespace grafikus
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<Class1> matrixLista = new List<Class1>();
        public MainWindow()
        {
            InitializeComponent();

            var allLines = File.ReadAllLines("adatok.txt");
            List<string> block = new List<string>();
            foreach (var line in allLines)
            {
                if (string.IsNullOrWhiteSpace(line))
                {
                    if (block.Count > 0)
                    {
                        matrixLista.Add(new Class1(block));
                        block.Clear();
                    }
                }
                else
                {
                    block.Add(line);
                }
            }
            if (block.Count > 0)
            {
                matrixLista.Add(new Class1(block));
            }
            for (int i = 0; i < matrixLista.Count; i++)
            {
                var m = matrixLista[i];
                cbMatrixok.Items.Add($"{i + 1}. mátrix - {m.sor}×{m.oszlop}");
            }
            if (cbMatrixok.Items.Count > 0)
                cbMatrixok.SelectedIndex = 0;
        }

        private void cbMatrixok_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            int idx = cbMatrixok.SelectedIndex;
            if (idx < 0 || idx >= matrixLista.Count) return;
            var m = matrixLista[idx];

            grid.Children.Clear();
            grid.Rows = m.sor;
            grid.Columns = m.oszlop;

            for (int i = 0; i < m.sor; i++)
            {
                for (int j = 0; j < m.oszlop; j++)
                {
                    var border = new Border
                    {
                        BorderBrush = Brushes.Black,
                        BorderThickness = new Thickness(1),
                        Margin = new Thickness(2)
                    };
                    var tb = new TextBlock
                    {
                        Text = m.data[i, j].ToString(),
                        HorizontalAlignment = HorizontalAlignment.Center,
                        VerticalAlignment = VerticalAlignment.Center,
                        Padding = new Thickness(4)
                    };
                    border.Child = tb;
                    grid.Children.Add(border);
                }
            }

            osszeg.Text = m.Osszeg().ToString();
            maximum.Text = m.Max().ToString();
            minimum.Text = m.Min().ToString();
            leggyakoribb.Text = m.Leggyakoribb().ToString();
            atlag.Text = m.Atlag().ToString("F2");
        }
    }
}