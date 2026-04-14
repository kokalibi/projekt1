import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';

const BookForm = ({ isEdit = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    published_year: ''
  });

  useEffect(() => {
    if (isEdit && id) {
      api.get(`/books/${id}`)
        .then(res => setFormData(res.data))
        .catch(() => setError("Nem sikerült betölteni a könyv adatait."));
    }
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/books/${id}`, formData);
      } else {
        await api.post('/books', formData);
      }
      navigate('/');
    } catch (err) {
      setError("Hiba! Ellenőrizd az adatokat (Title min 2 kar., Év > 0)!");
    }
  };

  return (
    <div className="form-page">
      <h2>{isEdit ? "Könyv módosítása" : "Új könyv hozzáadása"}</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit} className="book-form">
        <label>Cím:</label>
        <input 
          type="text" value={formData.title} required
          onChange={e => setFormData({...formData, title: e.target.value})}
        />
        <label>Szerző:</label>
        <input 
          type="text" value={formData.author} required
          onChange={e => setFormData({...formData, author: e.target.value})}
        />
        <label>Kiadási év:</label>
        <input 
          type="number" value={formData.published_year} required
          onChange={e => setFormData({...formData, published_year: e.target.value})}
        />
        <div className="form-btns">
          <button type="submit" className="btn-success">Mentés</button>
          <button type="button" onClick={() => navigate('/')} className="btn-secondary">Mégse</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;