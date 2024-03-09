import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import React from "react";
import SkillProgress from "./SkillProgress";
import data from "../../assets/cp.json";

function Landing() {
  const { skills } = data;
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
      <Stack gap={5}>
        <h3>Skills</h3>
        {skills.map((skill, id) => {
          const skillName = Object.keys(skill)[0];
          console.log(skillName);
          return <SkillProgress title={skillName} levels={skill[skillName]} />;
        })}
      </Stack>
    </>
  );
}

export default Landing;
