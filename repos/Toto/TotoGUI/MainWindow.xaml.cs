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

namespace TotoGUI
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void eredmeny_TextChanged(object sender, TextChangedEventArgs e)
        {
            if (karakterdb == null || eredmeny == null)
            {
                return;
            }
            int db = eredmeny.Text.Length;
            if (db == 14)
            {
                karakterdb.IsChecked = false;
            }
            else
            {
                karakterdb.IsChecked = true;
            }
            karakterdb.Content = $"Nem megfelelő karakterek száma ({db})";
            string s = eredmeny.Text;
            string hibak = "";
            foreach (char c in s)
            {
                if (c == '1' || c == '2' || c = 'X')
                {
                    karakterdb.IsChecked = false;
                }
                else
                {
                    karakterdb.IsChecked = true;
                    hibak += c + " ";
                }
            }
            if (hibak != "")
            {
                karakterek.IsChecked = true;
                karakterek.Content = $"Nem megfelelő karakterek: {hibak}";
            }
        }
    }
}