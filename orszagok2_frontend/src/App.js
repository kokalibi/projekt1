import { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keres from './components/keres';
import Loginform from './components/login/Loginform';
import Userprofile from './components/login/Userprofile';
import Reg from './components/login/RegForm';
import FilterDataForm from './components/FilterDataForm';


function App() {
  const [accessToken, setAccessToken] = useState(null);
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Országok</Link></li>
          <li><Link to="/login">Bejelentkezés</Link></li>
          <li><Link to="/profile">Profil</Link></li>
          <li><Link to="/register">Regisztráció</Link></li>
          <Link to="/filter">filter</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Keres />} />
        <Route path="/login" element={<Loginform accesstoken={accessToken} setAccessToken={setAccessToken} />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/register" element={< Reg/>} />
        <Route path='/filter' element={<FilterDataForm/>}/>
      </Routes>
    </Router>

  );
}

export default App;
