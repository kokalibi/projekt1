import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import aboutData from '../data/about.json';

const About = () => (
  <Container className="py-5">
    <Row className="align-items-center justify-content-center mb-5 text-md-start text-center">
      <Col md={5} className="mb-4 mb-md-0">
        <img 
          src={aboutData.heroImage} 
          alt="Company" 
          className="img-fluid rounded-4 shadow-lg" 
        />
      </Col>
      <Col md={6}>
        <div className="ps-md-4">
          <img src={aboutData.logo} alt="Logo" width="120" className="mb-3" />
          <h1 className="fw-bold">{aboutData.companyName}</h1>
          <p className="text-muted italic">Alapítva: {aboutData.founded}</p>
          <p className="fs-5">{aboutData.description}</p>
        </div>
      </Col>
    </Row>
    
    <Row className="justify-content-center g-4">
      <Col md={10}>
        <Card className="border-0 shadow-sm bg-white p-4 text-center">
          <h3>Küldetésünk</h3>
          <p className="lead">{aboutData.mission}</p>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default About;