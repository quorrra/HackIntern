import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

function CareerCard({ title, necessarySkills, imageSrc, careerLink }) {
  return (
    <Card style={{ width: "18rem", margin: "1rem", padding: 0 }}>
      <Card.Img
        style={{ objectFit: "cover", height: "12rem" }}
        src={imageSrc}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <ListGroup>
            {necessarySkills.map((skill, id) => (
              <ListGroup.Item key={id}>{skill}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button as="a" href={careerLink} variant="primary">
            Vezi cariera
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CareerCard;
