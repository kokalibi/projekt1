import { useState, useEffect } from "react";
import {Container,Row,Col,Card,Button,Spinner,Alert,} from "react-bootstrap";
import axios from "axios";

async function fetchCartData(cartId, timeout = 8000) {
  try {
    const response = await axios.get(`https://dummyjson.com/carts/${cartId}`, {
      timeout,
    });
    return response.data;
  } catch (err) {
    if (err.code === "ECONNABORTED") {
      throw new Error("A kérés időtúllépés miatt megszakadt (timeout).");
    } else if (err.message.includes("Network")) {
      throw new Error("Hálózati hiba történt. Ellenőrizd az internetkapcsolatot!");
    } else {
      throw new Error("Hiba történt az adatok lekérésekor.");
    }
  }
}

export default function Kosar({ cartId = 2 }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadCart = async () => {
    setLoading(true);
    setError("");
    setCart(null);

    try {
      const data = await fetchCartData(cartId);
      setCart(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchCartData(cartId)
      .then((data) => {
        if (isMounted) setCart(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [cartId]);

  const formatNum = (num) => num.toFixed(2);

  return (
    <Container className="my-4">
      {loading && (
        <div className="text-center my-5" aria-busy="true">
          <Spinner animation="border" role="status" aria-label="Betöltés" />
          <p>Adatok betöltése...</p>
        </div>
      )}

      {!loading && error && (
        <Alert
          variant="danger"
          className="text-center"
          aria-live="assertive"
          role="alert"
        >
          <p>{error}</p>
          <Button variant="outline-danger" onClick={loadCart} aria-label="Újratöltés">
            Újratöltés
          </Button>
        </Alert>
      )}

      {!loading && cart && (
        <Card className="shadow-sm">
          <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
            <h4 className="mb-0">
               Kosár #{cart.id} — Felhasználó #{cart.userId}
            </h4>
            <Button
              variant="light"
              size="sm"
              onClick={loadCart}
              aria-label="Kosár újratöltése"
            >
               Újratöltés
            </Button>
          </Card.Header>

          <Card.Body>
            <Row className="mb-3">
              <Col md={4}>
                <p>
                  <strong>Összesen:</strong> ${formatNum(cart.total)}
                </p>
                <p>
                  <strong>Kedvezmény után:</strong> $
                  {formatNum(cart.discountedTotal)}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>Termékek:</strong> {cart.totalProducts}
                </p>
                <p>
                  <strong>Összes mennyiség:</strong> {cart.totalQuantity}
                </p>
              </Col>
            </Row>

            <Row className="g-4 mt-3">
              {cart.products.map((product) => (
                <Col key={product.id} sm={6} md={4} lg={3}>
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        Ár: ${formatNum(product.price)} <br />
                        Mennyiség: {product.quantity} <br />
                        Subtotal: ${formatNum(product.price * product.quantity)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
