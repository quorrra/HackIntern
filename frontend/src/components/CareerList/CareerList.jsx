import { Col, Row } from "react-bootstrap";
import CareerCard from "./CareerCard";
import data from "../../assets/cp.json";

function CareerList() {
  const { paths } = data;

  return (
    <Row>
      {paths.map((path, id) => {
        const name = Object.keys(path)[0];
        return (
          <Col key={id}>
            <CareerCard
              title={name}
              necessarySkills={path[name].skills}
              imageSrc={path[name].cardImage}
              careerLink={`/careerPath/${path[name].slugCareer}`}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default CareerList;
