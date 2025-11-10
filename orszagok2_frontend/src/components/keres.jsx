import { useState, useEffect } from "react";
import http from "../httpcommon";
import { Button, Card, Form, Row, Col, Spinner, Alert, Container } from "react-bootstrap";

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
    <Container className="mt-4">
      <h1 className="mb-4 text-center">Országok kezelése</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <Card className="mb-4 shadow-sm">
        <Card.Header>Új ország hozzáadása</Card.Header>
        <Card.Body>
          <Form>
            <Row className="g-3">
              <Col xs={12} sm={6} md={4}>
                <Form.Control
                  type="text"
                  placeholder="Kód (pl. HU)"
                  value={ujOrszag.kod}
                  onChange={(e) => setUjOrszag({ ...ujOrszag, kod: e.target.value })}
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Form.Control
                  type="text"
                  placeholder="Név (pl. Magyarország)"
                  value={ujOrszag.nev}
                  onChange={(e) => setUjOrszag({ ...ujOrszag, nev: e.target.value })}
                />
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Form.Control
                  type="text"
                  placeholder="Régió (pl. Európa)"
                  value={ujOrszag.regio}
                  onChange={(e) => setUjOrszag({ ...ujOrszag, regio: e.target.value })}
                />
              </Col>
            </Row>
            <div className="mt-3 text-center text-md-start">
              <Button variant="success" onClick={addOrszag} disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Hozzáadás"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Lista */}
      <h2 className="mb-3">Országlista</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
          <div>Betöltés...</div>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {orszagok.map((orszag) => (
            <Col key={orszag.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={`https://assets.4cdn.hu/kraken/7yjbeVy0ymfy152iPs.jpeg`}></Card.Img>
                  <Card.Title className="text-truncate">{orszag.nev}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{orszag.kod}</Card.Subtitle>
                  <Card.Text className="mb-3">
                    <small>Régió: {orszag.regio}</small>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => fetchById(orszag.id)}
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {kivalasztott && (
        <Card className="mt-4 shadow-sm">
          <Card.Header>Kiválasztott ország</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={12} sm={6} md={3}>
                <p><strong>ID:</strong> {kivalasztott.id}</p>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <p><strong>Kód:</strong> {kivalasztott.kod}</p>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <p><strong>Név:</strong> {kivalasztott.nev}</p>
              </Col>
              <Col xs={12} sm={6} md={3}>
                <p><strong>Régió:</strong> {kivalasztott.regio}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Orszagok;
