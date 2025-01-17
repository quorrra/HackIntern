import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Row, Col, Container, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./CareerPaths.css";
import SkillProgress from "../landing/SkillProgress";
import { useSearchParams } from "react-router-dom";

const CareerPaths = () => {
  let [params, _] = useSearchParams();

  //   console.log(`percent is ${percent}`);
  const percentage = params.get("percentage");

  return (
    <Container className="home px-5">
      <div className="px-5 pb-5">
        <h1>
          Career Path: <Badge bg="secondary">Astronaut</Badge>
        </h1>
      </div>
      <Row>
        <Col md={6} sm={12} xs={12} className="text-center px-5">
          {percentage > 69 ? (
            <iframe
              title="astronaut-game"
              src="https://scratch.mit.edu/projects/238241966/embed"
              allowtransparency="true"
              width="485"
              height="402"
              frameborder="0"
              //   scrolling="no"
              allowfullscreen
            ></iframe>
          ) : (
            <img
              className="w-100"
              style={{ objectFit: "cover" }}
              //   width={400}
              height={500}
              src="https://cliply.co/wp-content/uploads/2019/09/371909290_ROCKET_400px.gif"
              alt="astronaut"
            />
            // <img
            //   className="w-100"
            //   src="https://i.pinimg.com/originals/5f/7e/46/5f7e46e91c0ba333ae7872bbee5ccc83.gif"
            //   alt="astronaut"
            // />
          )}

          <Container
            fluid
            className="text-center w-75 w-md-50 mt-5 p-0"
          ></Container>
        </Col>
        <Col md={6} sm={12} xs={12} className="right-side center-it">
          <div className="w100">
            <p className="text-decoration-underline">Aptitudini necesare</p>
            <Row>
              <Col md={3} sm={12} xs={12} className="right-side">
                <p>Matematica</p>
              </Col>
              <Col md={8}>
                <ProgressBar animated now={85} />
              </Col>
            </Row>
            <Row>
              <Col md={3} sm={12} xs={12} className="right-side">
                <p>Logica</p>
              </Col>
              <Col md={8}>
                <ProgressBar animated now={25} />
              </Col>
            </Row>
            <Row>
              <Col md={3} sm={12} xs={12} className="right-side">
                <p>Fizica</p>
              </Col>
              <Col md={8}>
                <ProgressBar animated now={45} />
              </Col>
            </Row>
            <Row>
              <Button className="py-3 hk-thin" href={"/test"} variant="info">
                Rezolva urmatorul test!
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <SkillProgress
            now={percentage === null ? 50 : percentage}
            title={"Astronaut"}
            levels={{
              L1: ["Astronaut"],
              L2: ["Racheta"],
              L3: ["Space Battle minigame"],
            }}
          />
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default CareerPaths;
