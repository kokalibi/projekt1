import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({ name: '', idopont: '', description: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // POST kérés küldése az adatokkal [cite: 54]
      await axios.post('http://localhost:8080/api/idopontok', formData);
      navigate('/'); // Siker esetén visszanavigál [cite: 56]
    } catch (err) {
      // Axios a hibaüzenetet az err.response.data-ban tárolja
      setError(err.response?.data?.error || "Szerver hiba történt!"); 
    }
  };

  return (
    <div>
      <h2>Új foglalás</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Név" required 
          value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} /> <br/><br/>
        
        <input type="datetime-local" required 
          value={formData.idopont} onChange={e => setFormData({ ...formData, idopont: e.target.value })} /> <br/><br/>
        
        <textarea placeholder="Leírás" 
          value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} /> <br/><br/>
        
        <button type="submit">Mentés</button>
        <button type="button" onClick={() => navigate('/')}>Mégse</button>
      </form>
    </div>
  );
}