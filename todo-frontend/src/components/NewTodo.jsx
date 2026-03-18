import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewTodo = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/todos', { title, completed: 0 }); // [cite: 28]
      navigate('/'); // [cite: 29]
    } catch (err) {
      setError("Hiba: Nem sikerült menteni a feladatot!"); // [cite: 30]
    }
  };

  return (
    <div>
      <h2>Új feladat</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Feladat neve" 
          required 
        /> {/* [cite: 24] */}
        <button type="submit">Mentés</button> {/* [cite: 25] */}
        <button type="button" onClick={() => navigate('/')}>Vissza</button> {/* [cite: 26] */}
      </form>
    </div>
  );
};

export default NewTodo;