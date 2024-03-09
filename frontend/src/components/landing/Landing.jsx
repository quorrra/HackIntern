import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

function Landing() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 justify-content-center">
          <Container fluid>
            <Navbar.Brand href="#">Learn-IT-all</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  
                  <NavDropdown
                    title={<span style={{color: 'blue'}}>Career Paths</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Programator</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Astronaut
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Lică Sămădău
                    </NavDropdown.Item>
                    
                
                  </NavDropdown>
                  <Nav.Link href="#action1">Skills</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>



      ))}
    </>
  );
}

export default Landing;
