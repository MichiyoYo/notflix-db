import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../../movie-card/MovieCard";

function AllMovies(props) {
  return (
    <Row>
      <h1 className="text-center mb-50">Movies</h1>
      {props.movies.map((movie) => (
        <MovieCard key={movie._id} movieData={movie} />
      ))}
    </Row>
  );
}

export default AllMovies;
