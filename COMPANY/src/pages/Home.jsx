import { Container, Carousel, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import homeData from '../data/home.json';

const Home = () => (
  <div className="main-content">
    <Carousel fade className="w-100 shadow-sm mb-4">
      {homeData.heroImages.map((img, idx) => (
        <Carousel.Item key={idx}>
          <div style={{ 
            height: '450px', 
            width: '100%', 
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#222'
          }}>
            <img 
              className="d-block" 
              src={img} 
              alt="Slide" 
              style={{ 
                maxHeight: '100%',
                maxWidth: '100%',
                width: 'auto',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center center',
                margin: '0 auto',
                display: 'block'
              }} 
            />
          </div>
          <Carousel.Caption className="d-flex align-items-center justify-content-center h-100" style={{ top: 0, bottom: 0 }}>
            <div className="bg-dark bg-opacity-50 p-3 rounded-4 shadow-lg" style={{ maxWidth: '80%' }}>
              <h3 className="fw-bold mb-1" style={{ fontSize: '1.5rem' }}>{homeData.title}</h3>
              <p className="small mb-0 d-none d-md-block">{homeData.subtitle}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    <Container className="text-center py-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h2 className="fw-bold mb-3">Üdvözöljük nálunk!</h2>
          <p className="text-secondary mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {homeData.welcomeText}
          </p>
          <Button as={Link} to="/about" variant="primary" size="lg" className="px-5 shadow rounded-pill">
            {homeData.cta.text}
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;