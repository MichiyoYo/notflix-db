import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import MovieCard from "../../movie-card/MovieCard";

/**
 * Genre component, renders the info about the actor passed by props, it also displays a list of movie card components
 * that are categorized under this genre
 * @param {*} props
 * @returns a JSX element holding the genre's info
 */
function Genre(props) {
  const { genreData, movies } = props;
  const histroyData = useHistory();

  const moviesInGenre = [];
  movies.map((movie) => {
    moviesInGenre.push(
      <Col
        xl={3}
        lg={4}
        md={6}
        sm={12}
        className="d-flex mb-30 "
        key={movie._id}
      >
        <MovieCard key={movie._id} movieData={movie} />
      </Col>
    );
  });

  return (
    <Row className="genre-details detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={() => histroyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h2 className="mb-50 pt-30">{genreData.Name}</h2>
          </Col>
          <Col sm={12}>
            <p className="description">{genreData.Description}</p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-50">
            <h3 className="mb-10">Movies in this genre</h3>
            <Row className="filmography p-0">{moviesInGenre}</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Genre;
