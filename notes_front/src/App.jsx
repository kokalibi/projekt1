import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import NotesList from './components/NoteList';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" href="/">Notes App</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Főoldal</Link>
            <Link className="nav-link" to="/notes">Jegyzetek</Link>
            <Link className="nav-link" to="/about">Rólunk</Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<NotesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;