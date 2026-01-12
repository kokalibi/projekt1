import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import productData from '../data/products.json';

const Products = () => (
  <Container className="py-5">
    <h1 className="text-center mb-5 fw-bold">Kínálatunk</h1>
    <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
      {productData.products.map(product => (
        <Col key={product.id}>
          <Card className="h-100 shadow-sm border-0 hover-shadow" style={{ transition: '0.3s' }}>
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <Card.Title className="h5 mb-0">{product.name}</Card.Title>
                {product.onSale && (
                  <Badge bg="danger">-{product.discountPercent}%</Badge>
                )}
              </div>
              <Card.Text className="text-muted small mb-4">
                {product.description}
              </Card.Text>
              <div className="mt-auto">
                <div className="h4 mb-3">
                  {product.price.toLocaleString()} Ft
                </div>
                
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Products;