import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="fixed-top">
          <div className="sidebar uv">
              <span>Universidad Veracruzana</span>
          </div>
          <div className="row-cols-lg-12 sigfox-nav">
              <Navbar collapseOnSelect expand="lg" variant="dark">
                  <Container>
                      <Link to="/">
                          <Navbar.Brand>
                              <img src="../images/logo.png"
                                   width="30"
                                   height="30"
                                   className="d-inline-block align-top"
                                   alt=""
                              />
                              Sigfox
                          </Navbar.Brand>
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
                  </Container>
              </Navbar>
          </div>

      </div>
  );
};

export default Navigation;
