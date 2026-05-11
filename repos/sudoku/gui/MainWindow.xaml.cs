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

namespace gui
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        int meret = 4;
        public MainWindow()
        {
            InitializeComponent();
        }
        private void plus_Click(object sender, RoutedEventArgs e)
        {
            meret = int.Parse(ertek.Text);
            if (meret < 9) meret = meret + 1;
            else meret = 9;
            ertek.Text = meret.ToString();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            meret = int.Parse(ertek.Text);
            if (meret > 4) meret = meret - 1;
            ertek.Text = meret.ToString();
        }
    }
}