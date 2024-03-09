import { Col, Row } from "react-bootstrap";
import CareerCard from "./CareerCard";
import data from "../../assets/cp.json";
import "./CareerList.css";

function CareerList() {
  const { paths } = data;

  return (
    <Row className="h100">
      {paths.map((path, id) => {
        const name = Object.keys(path)[0];
        return (
          <Col className="flex-it" key={id}>
            <CareerCard
              title={name}
              necessarySkills={path[name].skills}
              imageSrc={path[name].cardImage}
              careerLink={`/career/${path[name].slugCareer}`}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default CareerList;
