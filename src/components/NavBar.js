import React, {useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'
const CartContext = React.createContext();

export default function NavBar() {
  const  valor  = useContext(CartContext);
  return (
    <>
    <p>
        { valor }
    </p>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand >
            <NavLink to={`/`} activeClassName="currentCategory"><img height="60" src="./logo.png" ></img></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link><NavLink to={`/`} activeClassName="currentCategory">Quienes somos</NavLink></Nav.Link>
            <Nav.Link><NavLink to={`/`} activeClassName="currentCategory">Como comprar</NavLink></Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#action/1">Cubiertos</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">PLatos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Torteras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Ollas</NavDropdown.Item>
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