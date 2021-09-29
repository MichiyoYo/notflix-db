import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function MovieCard(props) {
  return (
    <Col md={4} className="justify-content-center d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://i.imgur.com/dOicCYC.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
