import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import MovieCard from "../../movie-card/MovieCard";

function Genre(props) {
  const { genreData, movies } = props;
  const histroyData = useHistory();

  const moviesInGenre = [];
  movies.map((movie) => {
    moviesInGenre.push(<MovieCard key={movie._id} movieData={movie} />);
  });

  return (
    <Row className="genre-details detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={() => histroyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h2 className="mb-50">{genreData.Name}</h2>
          </Col>
          <Col sm={12}>
            <p className="description">{genreData.Description}</p>
          </Col>

          <Col md={12} className="mt-50">
            <h3 className="mb-10">Movies in this genre</h3>
            <Row className="filmography p-0">{moviesInGenre}</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Genre;
