import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import User_info from './components/a_valtozo';
import UserStatus from './components/b_felteteles';
import Home from './components/home';
import Counter from './components/c_counter';
import UserLista1 from './components/lista1';
import Lista2 from './components/lista2';
import FetchAPI from './components/fechAPI2';

function App() {
  return (
    <>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Főoldal</Link></li>
          <li><Link to="/valtozo">Változó</Link></li>
          <li><Link to="/bejelentkezve">Logged</Link></li>
          <li><Link to="/kijelentkezve">Not Logged</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/lista1">Lista1</Link></li>
          <li><Link to="/lista2">Lista2</Link></li>
          <li><Link to="/fetchapi">Fetch API</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/valtozo' element={<User_info />} />
        <Route path='/bejelentkezve' element={<UserStatus isLoggedIn={true} />} />
        <Route path='/kijelentkezve' element={<UserStatus isLoggedIn={false} />} />
        <Route path='/counter' element={<><Counter/><Counter/></>} />
        <Route path='/lista1' element={<UserLista1 />} />
        <Route path='/lista2' element={<Lista2 />} />
        <Route path='/fetchapi' element={<FetchAPI />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
