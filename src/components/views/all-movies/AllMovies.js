import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function AllMovies(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== "") {
    filteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
    );
  }

  return (
    <Row>
      <h1 className="text-center mb-50">Movies</h1>
      {filteredMovies.map((movie) => (
        <Col className="justify-content-center d-flex mb-30" key={movie._id}>
          <MovieCard key={movie._id} movieData={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default connect(mapStateToProps)(AllMovies);

AllMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
