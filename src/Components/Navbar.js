import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Navbar.css";

function Navigation() {
  return (
    <div>
      <Navbar
        bg="dark"
        expand="lg"
        className="justify-content-between"
        style={{ marginBottom: 50 }}
      >
        <Navbar.Brand href="/" style={{ marginLeft: 20 }}>
          <img
            src={logo}
            width="100"
            height="max"
            className="d-inline-block align-top bg-light rounded"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "white",
            marginRight: 20,
          }}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ flexGrow: 0, marginRight: 20 }}
        >
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/browse" style={{ color: "white" }}>
              Browse
            </Nav.Link>
            <Nav.Link href="/discuss" style={{ color: "white" }}>
              Discuss
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "white" }}>
              Login
            </Nav.Link>

            {/* <NavDropdown
                title="User"
                id="basic-nav-dropdown"
                style={{ backgroundColor: "red", color: "white" }}
              >
                <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
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
