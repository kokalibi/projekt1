import { useState, useEffect } from "react";
import http from "../httpcommon";
import Button from 'react-bootstrap/Button';

const Orszagok = () => {
  const [orszagok, setOrszagok] = useState([]);
  const [ujOrszag, setUjOrszag] = useState({ kod: "", nev: "", regio: "" });
  const [kivalasztott, setKivalasztott] = useState(null);
  const [error, setError] = useState("");

  const fetchOrszagok = async () => {
    try {
      const response = await http.get("orszagok");
      setOrszagok(response.data);
    } catch (error) {
      console.error(error);
      setError("Hiba történt az országok lekérése során: " + error.message);
    }
  };

  async function deleteOrszag(id) {
    try {
      await http.delete(`orszagok/${id}`);
      fetchOrszagok();
    } catch (error) {
      console.error(error);
      setError("Nem sikerült törölni az országot: " + error.message);
    }
  }

  async function fetchById(id) {
    try {
      const response = await http.get(`orszagok/${id}`);
      setKivalasztott(response.data);
    } catch (error) {
      console.error(error);
      setError("Nem sikerült lekérni az országot: " + error.message);
    }
  }

  useEffect(() => {
    fetchOrszagok();
  }, []);

  async function addOrszag() {
    try {
      await http.post("orszagok", ujOrszag);
      fetchOrszagok();
      setUjOrszag({ kod: "", nev: "", regio: "" });
    } catch (error) {
      console.error(error);
      setError("Hiba történt az ország hozzáadása során: " + error.message);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Országok kezelése</h1>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <h2>Új ország hozzáadása</h2>
      <input
        type="text"
        placeholder="Kód (pl. HU)"
        value={ujOrszag.kod}
        onChange={(e) => setUjOrszag({ ...ujOrszag, kod: e.target.value })}
      />
      <input
        type="text"
        placeholder="Név (pl. Magyarország)"
        value={ujOrszag.nev}
        onChange={(e) => setUjOrszag({ ...ujOrszag, nev: e.target.value })}
      />
      <input
        type="text"
        placeholder="Régió (pl. Európa)"
        value={ujOrszag.regio}
        onChange={(e) => setUjOrszag({ ...ujOrszag, regio: e.target.value })}
      />
      <button onClick={addOrszag}>Hozzáadás</button>

      <h2>Országlista</h2>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kód</th>
            <th>Név</th>
            <th>Régió</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {orszagok.map((orszag) => (
            <tr key={orszag.id}>
              <td>{orszag.id}</td>
              <td>{orszag.kod}</td>
              <td>{orszag.nev}</td>
              <td>{orszag.regio}</td>
              <td>
                <Button variant="primary" onClick={() => fetchById(orszag.id)}>Részletek</Button>
                <button onClick={() => deleteOrszag(orszag.id)}>Törlés</button>
              </td>
            </tr>
            /*Card component from react-bootstrap can be used for better UI 
            <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> 
            */
          ))}
        </tbody>
      </table>

      {kivalasztott && (
        <div style={{ marginTop: "20px" }}>
          <h3>Kiválasztott ország:</h3>
          <p>
            <strong>ID:</strong> {kivalasztott.id}
          </p>
          <p>
            <strong>Kód:</strong> {kivalasztott.kod}
          </p>
          <p>
            <strong>Név:</strong> {kivalasztott.nev}
          </p>
          <p>
            <strong>Régió:</strong> {kivalasztott.regio}
          </p>
        </div>
      )}
    </div>
  );
};

export default Orszagok;
