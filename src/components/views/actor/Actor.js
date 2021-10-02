import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";

function Actor(props) {
  const { actorData, onBackClick, movies } = props;

  const filmography = [];
  actorData.Filmography.map((movie) => filmography.push(movie._id));

  const filmographyData = [];
  filmography.forEach((movieId) => {
    filmographyData.push(movies.find((movie) => movie._id === movieId));
  });
  console.log(filmographyData);

  const cards = [];
  filmographyData.map((movie) => {
    cards.push(<MovieCard key={movie._id} movieData={movie} />);
  });

  return (
    <Row className="actor-details detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={onBackClick} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h2 className="mb-50">{actorData.Name}</h2>
          </Col>
          <Col sm={12}>
            <h3>Biography</h3>
            <p className="bio">{actorData.Bio}</p>
          </Col>

          <Col md={12} className="mt-50">
            <h3 className="mb-10">Filmography</h3>
            <Row className="filmography p-0">{cards}</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Actor;
