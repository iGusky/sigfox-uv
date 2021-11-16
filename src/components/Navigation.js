import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-primary'>
      <div className="container">
        <Link to="/">
        <Navbar.Brand>Sigfox Dashboard</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Dispositivos</Nav.Link> */}
            {/* <Link to="/historial">
              <Nav.Link>Historial</Nav.Link>
            </Link> */}

            {/* <NavDropdown title="Descargar" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hoy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Otras Semanas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/*<Nav >*/}
          {/*    <Nav.Link href="#deets">More deets</Nav.Link>*/}
          {/*    <Nav.Link eventKey={2} href="#memes">*/}
          {/*        Dank memes*/}
          {/*    </Nav.Link>*/}
          {/*</Nav>*/}
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
