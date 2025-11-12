import logo from './logo.svg';
import './App.css';
import { FaCartShopping } from "react-icons/fa6";
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu.jsx';
import Alerts from './components/Alert.jsx';
import Main from './components/Main.jsx';
import Slies from './components/Slieas2.jsx';
import ButtonExample from './components/Badge.jsx';
import Product from './components/Productlist.jsx';
import Orszagok from './components/Orszag.jsx';

function App() {
  return (
    <>
    <Router>
      <Menu />
      <FaCartShopping />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/slies" element={<Slies />} />
        <Route path="/badge" element={<ButtonExample />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orszagok" element={<Orszagok />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
