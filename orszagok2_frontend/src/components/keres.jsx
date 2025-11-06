import { useState, useEffect } from "react";
import http from "../httpcommon";
import { Button, Card, Form, Row, Col, Spinner, Alert } from "react-bootstrap";

const Orszagok = () => {
  const [orszagok, setOrszagok] = useState([]);
  const [ujOrszag, setUjOrszag] = useState({ kod: "", nev: "", regio: "" });
  const [kivalasztott, setKivalasztott] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchOrszagok = async () => {
    setLoading(true);
    try {
      const response = await http.get("orszagok");
      setOrszagok(response.data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Hiba történt az országok lekérése során: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  async function deleteOrszag(id) {
    if (!window.confirm("Biztosan törölni szeretnéd ezt az országot?")) return;
    try {
      setLoading(true);
      await http.delete(`orszagok/${id}`);
      fetchOrszagok();
    } catch (error) {
      console.error(error);
      setError("Nem sikerült törölni az országot: " + error.message);
      setLoading(false);
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
      setLoading(true);
      await http.post("orszagok", ujOrszag);
      fetchOrszagok();
      setUjOrszag({ kod: "", nev: "", regio: "" });
    } catch (error) {
      console.error(error);
      setError("Hiba történt az ország hozzáadása során: " + error.message);
      setLoading(false);
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">🌍 Országok kezelése</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <Card className="mb-4">
        <Card.Header>Új ország hozzáadása</Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Kód (pl. HU)"
                  value={ujOrszag.kod}
                  onChange={(e) => setUjOrszag({ ...ujOrszag, kod: e.target.value })}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Név (pl. Magyarország)"
                  value={ujOrszag.nev}
                  onChange={(e) => setUjOrszag({ ...ujOrszag, nev: e.target.value })}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  type="text"
                  placeholder="Régió (pl. Európa)"
                  value={ujOrszag.regio}
                  onChange={(e) => setUjOrszag({ ...ujOrszag, regio: e.target.value })}
                />
              </Col>
            </Row>
            <Button variant="success" onClick={addOrszag} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Hozzáadás"}
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h2 className="mb-3">Országlista</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <div>Betöltés...</div>
        </div>
      ) : (
        <Row>
          {orszagok.map((orszag) => (
            <Col md={4} key={orszag.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{orszag.nev}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{orszag.kod}</Card.Subtitle>
                  <Card.Text>Régió: {orszag.regio}</Card.Text>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => fetchById(orszag.id)}
                    className="me-2"
                  >
                    Részletek
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteOrszag(orszag.id)}
                  >
                    Törlés
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {kivalasztott && (
        <Card className="mt-4">
          <Card.Header>Kiválasztott ország</Card.Header>
          <Card.Body>
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
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Orszagok;
