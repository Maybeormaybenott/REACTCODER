import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

const menuNavbar = [
  { text: "Inicio", link: "/#inicio" },
  { text: "Productos", link: "/#productos" },
  { text: "Outlet", link: "/#outlet" },
  { text: "Contacto", link: "/#Contacto" },
  { text: "Nosotros", link: "/#nosotros" },
];

export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">ModayAccesorios</Navbar.Brand>
      <Nav className="me-auto">
        {menuNavbar.map((item) => (
          <Nav.Link key={item.text} href={item.link}>
            {item.text}
          </Nav.Link>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
