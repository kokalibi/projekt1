import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await api.get('/books');
      setBooks(response.data);
    } catch (err) {
      setError("Hiba történt a könyvek betöltésekor."); 
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Biztosan törölni szeretnéd?")) {
      try {
        await api.delete(`/books/${id}`);
        setBooks(books.filter(book => book.id !== id)); 
      } catch (err) {
        alert("Sikertelen törlés!");
      }
    }
  };

  if (loading) return <div>Betöltés...</div>; 
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="list-container">
      <div className="header">
        <h1>Könyvek</h1>
        <button onClick={() => navigate('/new')}>Új könyv</button> 
      </div>
      <div className="book-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3> 
            <p><strong>Szerző:</strong> {book.author}</p>
            <p><strong>Év:</strong> {book.published_year}</p> 
            <div className="card-actions">
              <Link to={`/books/${book.id}`} className="btn-detail">Részletek</Link>
              <button onClick={() => handleDelete(book.id)} className="btn-delete">Törlés</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;