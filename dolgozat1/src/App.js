import logo from './logo.svg';
import './App.css';
import { FaCartShopping } from "react-icons/fa6";
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Main from './components/Main';
import Kosar from './components/Kosar';

function App() {
  return (
    <>
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/alerts" element={<Kosar />} />
        <Route path="/kosar" element={<Kosar />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
