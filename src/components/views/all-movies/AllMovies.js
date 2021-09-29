import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";

function AllMovies(props) {
  return (
    <Row>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Row>
  );
}

export default AllMovies;
