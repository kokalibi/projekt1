import React, { useState, useEffect } from 'react';
import { api } from './components/ApiService';
import CitySection from './components/CitySection';
import ResidentSection from './components/ResidentSection';

function App() {
  const [cities, setCities] = useState([]);
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [cRes, rRes] = await Promise.all([api.get('/varosok'), api.get('/lakossag')]);
      setCities(cRes.data);
      setResidents(rRes.data);
    } catch (err) {
      console.error("Hiba a betöltéskor");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Város-Lakos Admin</h1>
      {loading ? (
        <div className="text-center">Betöltés...</div>
      ) : (
        <div className="row">
          <CitySection cities={cities} refresh={loadData} />
          <ResidentSection residents={residents} cities={cities} refresh={loadData} />
        </div>
      )}
    </div>
  );
}

export default App;