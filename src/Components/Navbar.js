import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/browse">Browse</Link>

        <Link to="/discuss">Discuss</Link>

        <Link to="/login">Log In</Link>
      </nav>
    </div>
    // <Navbar inverse collapseOnSelect>
    //   <Navbar.Header>
    //     <Navbar.Brand>
    //       <a href="#brand">React-Bootstrap</a>
    //     </Navbar.Brand>
    //     <Navbar.Toggle />
    //   </Navbar.Header>
    //   <Navbar.Collapse>
    //     <Nav>
    //       <NavItem eventKey={1} href="#">
    //         Link
    //       </NavItem>
    //       <NavItem eventKey={2} href="#">
    //         Link
    //       </NavItem>
    //       {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
    //         <NavItem eventKey={3.1}>Action</NavItem>
    //         <NavItem eventKey={3.2}>Another action</NavItem>
    //         <NavItem eventKey={3.3}>Something else here</NavItem>
    //       </NavDropdown> */}
    //     </Nav>
    //     <Nav pullRight>
    //       <NavItem eventKey={1} href="#">
    //         Link Right
    //       </NavItem>
    //       <NavItem eventKey={2} href="#">
    //         Link Right
    //       </NavItem>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default Navigation;
