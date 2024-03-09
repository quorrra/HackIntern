import React from "react";
import Badge from 'react-bootstrap/Badge';
import {Row, Col, Container} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './CareerPaths.css'
import Image from '../../assets/astronaut.svg';

const CareerPaths = () => {
    return(
        <Container className="home">
            <div>
            <h1>
        Career Paths <Badge bg="secondary">Astronaut</Badge>
      </h1>
            </div>
            <Row>
                <Col md={6} sm={12} xs={12} className="text-center px-5">
                <img  className="pt-5"src={Image} alt={Image} />
                    <Container fluid className="text-center w-75 w-md-50 mt-5 p-0">
                    </Container>
                </Col>
                <Col md={6} sm={12} xs={12} className="right-side">
                    <div>
                        <p className="text-decoration-underline">Aptitudini necesare</p>
                        <Row>
                            <Col md={2} sm={12} xs={12} className="right-side">
                                <p>Mate</p>
                               
                            </Col>
                            <Col md={5}>
                             <ProgressBar animated now={85}/>
                            </Col>
                        </Row>
                        <Row>
                          <Col md={2} sm={12} xs={12} className="right-side">
                             <p>Logica</p>
                          </Col>
                          <Col md={5}>
                            <ProgressBar animated now={25} />
                          </Col>
                        </Row>
                        <Row>
                        <Col md={2} sm={12} xs={12} className="right-side">
                             <p>Fizica</p>
                          </Col>
                          <Col md={5}>
                            <ProgressBar animated now={45} />
                          </Col>
                        </Row>
                        
                        <a href="/rules">Citește regulamentul!</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CareerPaths