import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <Container className="pt-4">
      <Card className="p-2">
        <Nav>
          <NavItem>
            <NavLink>
              <Link style={{color: 'blue', textDecoration: 'none'}} to="/home">Inicio</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {" "}
              <Link style={{color: 'blue', textDecoration: 'none'}} to="/home/productos">Productos</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link style={{color: 'blue', textDecoration: 'none'}} to="/home/estadisticas">Estadisticas</Link></NavLink>
          </NavItem>
          <Col className="text-end">
          <NavLink className=""><Link style={{color: 'blue', textDecoration: 'none'}} to="/">Cerrar sesión</Link></NavLink>
          </Col>
        </Nav>
      </Card>
    </Container>
  );
};

export default NavBar;
