import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/browse">Browse</Nav.Link>
              <Nav.Link href="/discuss">Discuss</Nav.Link>
              {/* <Nav.Link href="/login">Log In</Nav.Link> */}
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
        <Link to="/">Home</Link>

        <Link to="/browse">Browse</Link>

        <Link to="/discuss">Discuss</Link>

        <Link to="/login">Log In</Link>
      </nav> */}
    </div>
  );
}

export default Navigation;
