import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
    <Container>
      <Navbar.Brand as={Link} to="/">TechNova</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center"> 
          <Nav.Link as={Link} to="/">Nyitóoldal</Nav.Link>
          <Nav.Link as={Link} to="/about">Rólunk</Nav.Link>
          <Nav.Link as={Link} to="/products">Termékeink</Nav.Link>
          <Nav.Link as={Link} to="/sales">Akcióink</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;