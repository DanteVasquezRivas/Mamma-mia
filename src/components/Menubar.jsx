import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzasContext } from "../context/PizzaProv";

export default function Menubar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        style={{ height: "80px", backgroundColor: "red" }}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src="/pizza-icon.webp"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Pizzas mamma mía"
              />
              &nbsp;Pizzería Mamma mía!
            </Navbar.Brand>
          </Link>

          <Nav className="me-auto" style={{ marginLeft: "80%" }}>
            <Link to="/carrito" className="logo-nombre mx-1 mb-0">
              <img
                src="/carrito.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="Pizzas mamma mía"
              />
            </Link>

            <h4 className="mb-0">
              {""} Total: ${total}
            </h4>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
