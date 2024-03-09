import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "./components/landing/Landing";
import CareerPaths from "./components/CareerPathsI/CareerPaths";
import Test from "./components/tests/Test";
import Check from "./components/tests/check/Check";
import CareerList from "./components/CareerList/CareerList";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter className="main-container">
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 justify-content-center"
        >
          <Container fluid>
            <Navbar.Brand href="/">Learn-IT-all</Navbar.Brand>
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
                  <Nav.Link href="/career-list">Career Paths</Nav.Link>
                  <Nav.Link href="/#skills">Skills</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div className="dashboard container-fluid">
        <div className="row">
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/career/astronaut" exact element={<CareerPaths />} />
            <Route path="/test" exact element={<Test />} />
            <Route path="/check" exact element={<Check />} />
            <Route path="/career-list" exact element={<CareerList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
