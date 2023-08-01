import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">ModayAccesorios</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Outlet</Nav.Link>
        <Nav.Link href="#pricing">Contacto</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
        
      </Nav>
      <CartWidget></CartWidget>
    </Container>
     
  </Navbar>
       
)