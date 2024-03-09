import React, { useState } from "react";
import Badge from 'react-bootstrap/Badge';
import { Row, Col, Container, Button } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './CareerPaths.css'
import SkillProgress from "../landing/SkillProgress";
// import Image from '../../assets/astronaut.svg';

const CareerPaths = () => {
    const [percentage, setPercentage] = useState(45);

    return (
        <Container className="home px-5">
            <div className="px-5">
                <h1>
                    Career Path: <Badge bg="secondary">Astronaut</Badge>
                </h1>
            </div>
            <Row>
                <Col md={6} sm={12} xs={12} className="text-center px-5">
                    <img className="w-100" src="" alt="" />
                    <Container fluid className="text-center w-75 w-md-50 mt-5 p-0">
                    </Container>
                </Col>
                <Col md={6} sm={12} xs={12} className="right-side center-it">
                    <div className="w100">
                        <p className="text-decoration-underline">Aptitudini necesare</p>
                        <Row>
                            <Col md={3} sm={12} xs={12} className="right-side">
                                <p>Mate</p>

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
                            <Button className="py-3 hk-thin" href={"/test"} variant="info">Rezolva urmatorul test!</Button>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SkillProgress now={percentage} title={"Astronaut"} levels={{
                        "L1": ["Astronaut"],
                        "L2": ["Racheta"],
                        "L3": ["Space Battle minigame"]
                    }} />
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    );
}

export default CareerPaths