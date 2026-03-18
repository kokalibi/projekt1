import React, { useState } from 'react';
import { api, handleApiError } from './ApiService';

const ResidentSection = ({ residents, cities, refresh }) => {
  const [formData, setFormData] = useState({ id: null, nev: '', kor: '', varos_id: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await api.put(`/lakossag/${formData.id}`, formData);
      } else {
        await api.post('/lakossag', formData);
      }
      setFormData({ id: null, nev: '', kor: '', varos_id: '' });
      refresh();
    } catch (err) { alert(handleApiError(err)); }
  };

  return (
    <div className="col-md-6">
      <h3>Lakosok</h3>
      <form onSubmit={handleSubmit} className="mb-3 p-3 bg-light border">
        <input type="text" placeholder="Név" className="form-control mb-2" 
          value={formData.nev} onChange={e => setFormData({...formData, nev: e.target.value})} required />
        <input type="number" placeholder="Kor" className="form-control mb-2" 
          value={formData.kor} onChange={e => setFormData({...formData, kor: e.target.value})} required />
        <select className="form-select mb-2" value={formData.varos_id} 
          onChange={e => setFormData({...formData, varos_id: e.target.value})} required>
          <option value="">Város választása...</option>
          {cities.map(c => <option key={c.id} value={c.id}>{c.varosnev || c.nev}</option>)}
        </select>
        <button className="btn btn-success w-100">Mentés</button>
      </form>
      <table className="table">
        <thead><tr><th>Név</th><th>Kor</th><th>Művelet</th></tr></thead>
        <tbody>
          {residents.map(r => (
            <tr key={r.id}>
              <td>{r.nev}</td>
              <td>{r.kor}</td>
              <td>
                <button className="btn btn-sm btn-warning me-1" onClick={() => setFormData(r)}>✏️</button>
                <button className="btn btn-sm btn-danger" onClick={() => {
                  if(confirm("Törli?")) api.delete(`/lakossag/${r.id}`).then(refresh);
                }}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResidentSection;