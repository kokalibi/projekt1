import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`)
      .then(res => setBook(res.data))
      .catch(() => setError("A könyv nem található!"));
  }, [id]);

  if (error) return <div className="error-msg">{error} <button onClick={() => navigate('/')}>Vissza</button></div>;
  if (!book) return <div>Betöltés...</div>;

  return (
    <div className="details-card">
      <h1>{book.title}</h1>
      <div className="info">
        <p><strong>Szerző:</strong> {book.author}</p>
        <p><strong>Kiadási év:</strong> {book.published_year}</p>
        <p><strong>Létrehozva:</strong> {new Date(book.created_at).toLocaleString()}</p>
      </div>
      <div className="details-actions">
        <button onClick={() => navigate(`/books/${id}/edit`)} className="btn-info">Szerkesztés</button>
        <button onClick={() => navigate('/')} className="btn-secondary">Vissza a listához</button>
      </div>
    </div>
  );
};

export default BookDetails;