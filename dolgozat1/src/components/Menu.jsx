import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartShopping } from "react-icons/fa6";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/kosar">Cart<FaCartShopping /></Nav.Link>

            <NavDropdown title="Dolgok" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home3</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Home4
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Home5</NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;