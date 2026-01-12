import { Container, Row, Col, Card, Badge, ListGroup } from 'react-bootstrap';
import salesData from '../data/sales.json';
import productData from '../data/products.json';

const Sales = () => {
  const getProductName = (id) => productData.products.find(p => p.id === id)?.name;

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Aktuális kedvezmények</h1>
      <Row className="g-4 justify-content-center">
        {salesData.sales.map((sale) => (
    <Col md={6} lg={4} key={sale.id}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Header className="bg-danger text-white py-3">
                <Card.Title className="mb-0">{sale.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <p className="fw-bold text-danger mb-2 small italic">
                  Érvényes: {sale.validUntil}
                </p>
                <Card.Text>{sale.description}</Card.Text>
                <hr />
                <h6>Érintett termékek:</h6>
                <div className="d-flex flex-wrap gap-2">
                  {sale.productIds.map(id => (
                    <Badge key={id} bg="light" text="dark" className="border">
                      {getProductName(id)}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sales;