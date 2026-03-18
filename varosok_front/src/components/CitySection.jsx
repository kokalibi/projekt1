import React, { useState } from 'react';
import { api, handleApiError } from './ApiService';

const CitySection = ({ cities, refresh }) => {
  const [formData, setFormData] = useState({ id: null, irszam: '', varosnev: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await api.put(`/varosok/${formData.id}`, formData);
      } else {
        await api.post('/varosok', formData);
      }
      setFormData({ id: null, irszam: '', varosnev: '' });
      refresh();
    } catch (err) {
      alert(handleApiError(err));
    }
  };

  const deleteCity = async (id) => {
    if (confirm("Törli a várost?")) {
      try {
        await api.delete(`/varosok/${id}`);
        refresh();
      } catch (err) { alert(handleApiError(err)); }
    }
  };

  return (
    <div className="col-md-6 border-end">
      <h3>Városok</h3>
      <form onSubmit={handleSubmit} className="mb-3 p-3 bg-light border">
        <input type="text" placeholder="Irányítószám" className="form-control mb-2" 
          value={formData.irszam} onChange={e => setFormData({...formData, irszam: e.target.value})} required />
        <input type="text" placeholder="Városnév" className="form-control mb-2" 
          value={formData.varosnev} onChange={e => setFormData({...formData, varosnev: e.target.value})} required />
        <button className="btn btn-primary w-100">{formData.id ? 'Módosítás' : 'Hozzáadás'}</button>
      </form>
      <table className="table">
        <thead><tr><th>IRSZ</th><th>Név</th><th>Művelet</th></tr></thead>
        <tbody>
          {cities.map(c => (
            <tr key={c.id}>
              <td>{c.irszam}</td>
              <td>{c.varosnev || c.nev}</td>
              <td>
                <button className="btn btn-sm btn-warning me-1" onClick={() => setFormData(c)}>✏️</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteCity(c.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitySection;