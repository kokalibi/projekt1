import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './pages/BookList';
import BookForm from './pages/BookForm';
import BookDetails from './pages/BookDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/new" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/books/:id/edit" element={<BookForm isEdit={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;