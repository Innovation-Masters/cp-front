import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HQ Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Página Inicial</Nav.Link>
            <Nav.Link href="#">Lista de HQs</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Patrocinadores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}