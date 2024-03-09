import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
//import image froma ssets
import Image from "../../assets/landingpoza.svg";

import "./LandingStyle.css";

function Landing() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 justify-content-center"
        >
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
                    title={<span style={{ color: "blue" }}>Career Paths</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Programator
                    </NavDropdown.Item>
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
      <Container>
        <div className="d-flex justify-content-center gap-5">
          <div className="ms-6">
            <img className="pt-5" src={Image} alt="LandingImage" />
          </div>
          <div className="m-5 pb-5 ">
            <h1>Learn-IT-all</h1>
            <p>
              În lumea magică a Learn-It-All, copiii devin eroi ai cunoașterii!
              Aici, ei își creează propriul lor personaj și își cresc puterile
              (adică cunoștințele) rezolvând teste distractive și jucându-se. Cu
              cât trec mai multe teste, cu atât devin mai puternici și
              deblochează cariere grozave! De la explorarea matematicii până la
              aventurile în lumea cărților, Learn-It-All îi ajută pe copii să-și
              urmeze visurile și să devină mari!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Landing;
