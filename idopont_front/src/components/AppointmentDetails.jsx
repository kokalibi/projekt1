import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function AppointmentDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/idopontok/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          setError(true); // 404 hiba kezelése [cite: 66]
        }
      });
  }, [id]);

  if (error) return <div><h2>404 - Az időpont nem található!</h2><Link to="/">Vissza</Link></div>;
  if (!data) return "Betöltés...";

  return (
    <div>
      <h2>Részletek</h2>
      <p><strong>Név:</strong> {data.name}</p>
      <p><strong>Időpont:</strong> {new Date(data.idopont).toLocaleString()}</p>
      <p><strong>Leírás:</strong> {data.description}</p>
      <p><strong>Létrehozva:</strong> {new Date(data.created_at).toLocaleString()}</p>
      <Link to="/">Vissza a listához</Link>
    </div>
  );
}