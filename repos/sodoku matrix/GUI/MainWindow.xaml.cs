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

namespace GUI
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<beolvaso> beolvasok = new List<beolvaso>();
        public MainWindow()
        {
            InitializeComponent();
            string beadatok = File.ReadAllText("konnyu.txt");
            int index = 0;
            while (index < beadatok.Length)
            {
                string sor = "";
                while (index < beadatok.Length && beadatok[index] != ' ')
                {
                    sor += beadatok[index];
                    index++;
                }
                index++;
                if (!string.IsNullOrWhiteSpace(sor))
                {
                    beolvasok.Add(new beolvaso(sor));
                }
            }
            
        }
    }
}