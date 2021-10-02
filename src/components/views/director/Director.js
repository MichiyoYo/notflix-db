import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";

function Director(props) {
  const { directorData, onBackClick, movies } = props;

  const birth = new Date(directorData.BirthDate);
  const death = new Date(directorData.DeathDate);

  const filmography = [];
  directorData.Filmography.map((movie) => filmography.push(movie._id));

  const filmographyData = [];
  filmography.forEach((movieId) => {
    filmographyData.push(movies.find((movie) => movie._id === movieId));
  });

  const cards = [];
  filmographyData.map((movie) => {
    cards.push(<MovieCard key={movie._id} movieData={movie} />);
  });

  return (
    <Row className="director-details detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={onBackClick} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h2 className="mb-50">{directorData.Name}</h2>
          </Col>
          <Col sm={12}>
            <h3>Biography</h3>
            <p className="bio">{directorData.Bio}</p>
            <h3>Fatcs</h3>
            <p className="birthdate">
              <span>Birth Date: </span>
              {birth.getMonth() +
                1 +
                "/" +
                birth.getDate() +
                "/" +
                birth.getFullYear()}
            </p>
            {directorData.DeathDate ? (
              <p className="deathdate">
                <span>Death Date: </span>
                {death.getMonth() +
                  1 +
                  "/" +
                  death.getDate() +
                  "/" +
                  death.getFullYear()}
              </p>
            ) : (
              ""
            )}
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

export default Director;
