import Container from "react-bootstrap/Container";
import React from "react";
//import image froma ssets
import Image from "../../assets/landingpoza.svg";

import "./LandingStyle.css";
import Stack from "react-bootstrap/Stack";
import data from "../../assets/cp.json";
import SkillProgress from "./SkillProgress";

function Landing() {
  const { skills } = data;
  return (
    <>
      <Container className="p-5">
        <div className="ps-5 pe-2">
          <div className="d-flex justify-content-center gap-5">
            <div className="ms-6">
              <img className="pt-5" src={Image} alt="LandingImage" />
            </div>
            <div className="ms-5 py-5 ">
              <h1 className="pb-5">Learn-IT-all</h1>
              <h5>
                În lumea magică a Learn-It-All, copiii devin eroi ai
                cunoașterii! Aici, ei își creează propriul lor personaj și își
                cresc puterile (adică cunoștințele) rezolvând teste distractive
                și jucându-se. Cu cât trec mai multe teste, cu atât devin mai
                puternici și deblochează cariere grozave! De la explorarea
                matematicii până la aventurile în lumea cărților, Learn-It-All
                îi ajută pe copii să-și urmeze visurile și să devină mari!
              </h5>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br id="skills" />
        <br />
        <br />
        <div>
          <h2 className="pb-5" style={{ fontSize: "2.5rem" }}>Skills</h2>
          <Stack gap={5}>
            {skills.map((skill, id) => {
              const skillName = Object.keys(skill)[0];
              console.log(skillName);
              return (
                <SkillProgress title={skillName} levels={skill[skillName]} />
              );
            })}
          </Stack>
        </div>
      </Container>
    </>
  );
}

export default Landing;
