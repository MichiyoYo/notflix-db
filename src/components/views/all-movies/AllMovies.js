import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";
import PropTypes from "prop-types";

function AllMovies(props) {
  return (
    <Row>
      <h1 className="text-center mb-50">Movies</h1>
      {props.movies.map((movie) => (
        <Col
          xl={3}
          lg={4}
          md={6}
          sm={12}
          className="justify-content-center d-flex mb-30"
          key={movie._id}
        >
          <MovieCard key={movie._id} movieData={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default AllMovies;

AllMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
