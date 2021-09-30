import React from "react";
import { Card, Button, Col } from "react-bootstrap";

function MovieCard(props) {
  return (
    <Col
      xl={3}
      lg={4}
      md={6}
      sm={12}
      className="justify-content-center d-flex mb-30"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://i.imgur.com/AXS8VDK.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Details</Button>
          <div className="interactions d-inline-block">
            <Button variant="link mr-20" title="Add to Watchlist">
              <i class="far fa-bookmark"></i>
            </Button>
            <Button variant="link" title="Add to Favorites">
              <i class="far fa-heart"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
