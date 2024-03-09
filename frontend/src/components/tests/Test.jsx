import React, { useEffect, useState } from "react";
import {Row, Col, Container, Button} from "react-bootstrap";
import './Test.css'
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { useTimer } from 'react-timer-hook';
import { Field, Form, Formik } from "formik";
import Picker from "../picker/picker";

const Test = () => {
    const [expired, setExpired] = useState(false);
    const [expiryTimestamp, _] = useState(new Date())

    const {
        seconds,
        minutes,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {
        console.warn('onExpire called');
        setExpired(true);
    } });

    useEffect(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 10);
        restart(time)
    }, [restart])

    useEffect(() => {
        if (!expired) return;

        const time = new Date();
        time.setSeconds(time.getSeconds() + 5*60);
        restart(time)
    }, [expired])

    return(
        <Container className="home my-5 px-0">
            <Container className="px-0 white border">
            <Row>
                <Col md={9} sm={12} xs={12} className="px-5 pt-5">
                    <h3 className="title pb-5">Matematica 1: Testeaza-ti cunostintele!</h3>
                </Col>
                <Col md={3} sm={12} xs={12} className="p-5 blue justify-content-end">
                    <h3>100xp</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={12} xs={12} className="px-5 pb-5">
                    <h5>Bine ai venit! Acesta este primul test de competente din cadrul cursului Matematica 1. Completarea lui cu succes duce la castigarea a 100xp.</h5>

                    {!expired && <div>
                        <p>Testul dureaza 25 de minute. Odata cu finalizarea timpului, vei avea alte 5 minute la dispozitie pentru a-ti incarca raspunsul.</p>
                        <p className="inline">Se considera expresia </p>
                        <InlineMath math={'E = \\frac{(x+2)(x^2+4x+4)-x-2}{x(x+5)+6}'}
                            className="inline" errorColor={'#cc0000'}/>
                        <p className="inline"> pentru x </p>
                        <InlineMath math={'\\in \\mathbb{R} \\backslash \\{-3,-2\\}'}
                            className="inline" errorColor={'#cc0000'}/>

                        <br />

                        <p className="ps-5 inline">a) Calculati valoarea expresiei pentru </p>
                        <InlineMath math={'x=4'}
                            className="inline" errorColor={'#cc0000'}/>

                        <br />

                        <p className="ps-5 inline">b) Aratati ca </p>
                        <InlineMath math={'(x+2)(x^2+4x+4)-x-2=(x+1)(x+2)(x+3)'}
                            className="inline" errorColor={'#cc0000'}/>
                        <p className="inline"> pentru orice x real.</p>

                        <br />

                        <p className="ps-5 inline">c) Aratati ca </p>
                        <InlineMath math={'E(n)'}
                            className="inline" errorColor={'#cc0000'}/>
                        <p className="inline"> este numar natural, oricare ar fi numarul natural n.</p>
                    </div>}

                    {expired && <div>
                        <p>Ai 5 minute la dispozitie pentru a-ti incarca raspunsul! Incarca un singur document (o fotografie) apasand butonul de mai jos:</p>
                        <Formik
                            initialValues={{
                                image: null,
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                try {
                                    alert("Am primit solutia ta!");
                                    window.location.replace("career/astronaut?percentage=70")
                                } catch(e) {
                                    alert("Ceva nu a mers bine!");
                                }

                                setSubmitting(false);
                            }}
                        >
                            {formik => (
                                <Form className="memeform p-5 w-75">
                                    <label className="text label-cls" htmlFor="image">Solutia ta (jpg, jpeg, png, gif)</label>
                                    <Field
                                        name="image"
                                        component={Picker}
                                        accept="image/*"
                                        margin="normal"
                                        placeholder="drag & drop image or click here to upload"
                                    />

                                    <Button type="submit" variant="success">Trimite</Button>
                                </Form>
                            )}
                        </Formik>
                    </div>}

                    {/* timer */}
                    <div style={{textAlign: 'end'}}>
                        <div style={{fontSize: '40px'}}>
                        <span>{minutes}</span>:<span>{seconds}</span>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default Test