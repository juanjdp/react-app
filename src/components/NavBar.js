import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

const CartContext = React.createContext();

export default function NavBar() {
  const  valor  = useContext(CartContext);
  return (
    <>
    <p>
        { valor }
    </p>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img height="60" src="./logo.png" ></img></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Quienes somos</Nav.Link>
            <Nav.Link href="#home">Servicio al cliente</Nav.Link>
            <Nav.Link href="#home">Como comprar</Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#action/1">Personal</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Autos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </>
  );
}