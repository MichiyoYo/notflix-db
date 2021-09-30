import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { movieData } = props;
  return (
    <Col
      xl={3}
      lg={4}
      md={6}
      sm={12}
      className="justify-content-center d-flex mb-30"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movieData.ImagePath}
          alt={`${movieData.Title} Poster `}
        />
        <Card.Body>
          <Card.Title>{props.movieData.Title}</Card.Title>
          <Card.Text>{movieData.Description.slice(0, 100) + "..."}</Card.Text>
          <Link to={`/movies/${movieData._id}`}>
            <Button variant="primary">Details</Button>
          </Link>
          <div className="interactions d-inline-block">
            <Button variant="link mr-20" title="Add to Watchlist">
              <i className="far fa-bookmark"></i>
            </Button>
            <Button variant="link" title="Add to Favorites">
              <i className="far fa-heart"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MovieCard;
