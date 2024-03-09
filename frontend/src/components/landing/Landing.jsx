import React from "react";
import {Row, Image, Col, Container} from "react-bootstrap";
import './Landing.css'

const Landing = () => {
    return(
        <Container className="home">
            <Row>
                <Col md={6} sm={12} xs={12} className="text-center px-5">
                    <Image className="mx-auto w-75 w-md-50" src="https://upload.wikimedia.org/wikipedia/commons/2/27/Red_square.svg" alt="https://upload.wikimedia.org/wikipedia/commons/2/27/Red_square.svg"></Image>
                    <Container fluid className="text-center w-75 w-md-50 mt-5 p-0">
                    </Container>
                </Col>
                <Col md={6} sm={12} xs={12} className="right-side">
                    <div>
                        <p className="large-text">Vânătoarea de comori a început!</p>
                        <p className="text">Îți place să rezolvi ghicitori, să explorezi noi locuri sau să îți testezi ingeniozitatea printr-o serie de jocuri? Treasure Hunt Bucharest este atât un concurs dedicat persoanelor pasionate de mistere și provocări, cât și o ocazie de a petrece o zi plăcută alături de prieteni.</p>
                        <a href="/rules">Citește regulamentul!</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing