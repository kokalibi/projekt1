import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AppointmentList() {
  const [list, setList] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/idopontok');
      setList(response.data);
    } catch (err) {
      console.error("Hiba a lekérésnél:", err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleDelete = async (id) => {
    if (confirm("Biztosan törölni szeretnéd?")) {
      try {
        await axios.delete(`http://localhost:8080/api/idopontok/${id}`);
        loadData(); // Újratöltés törlés után [cite: 47]
      } catch (err) {
        alert("Hiba történt a törlés során!");
      }
    }
  };

  return (
    <div>
      <h1>Időpontok</h1>
      <Link to="/new"><button>Új foglalás</button></Link>
      <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Név</th><th>Időpont</th><th>Leírás</th><th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{new Date(item.idopont).toLocaleString()}</td>
              <td>{item.description}</td>
              <td>
                <Link to={`/idopontok/${item.id}`}>Részletek</Link>
                <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>Törlés</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}