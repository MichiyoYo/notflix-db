import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";

function AllMovies(props) {
  return (
    <Row>
      {props.movies.map((movie) => (
        <MovieCard key={movie._id} movieData={movie} />
      ))}
    </Row>
  );
}

export default AllMovies;
