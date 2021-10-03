import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../../../movie-card/MovieCard";

function Watchlist(props) {
  const { userData, movies } = props;

  const watchlist = [];
  userData.WatchList.map((movie) => watchlist.push(movie._id));

  const filteredMovies = [];
  watchlist.forEach((movieId) =>
    filteredMovies.push(movies.find((movie) => movie._id === movieId))
  );

  const cards = [];
  filteredMovies.map((movie) => {
    cards.push(<MovieCard key={movie._id} movieData={movie} />);
  });

  return (
    <Row>
      <h1 className="text-center mb-50">Watchlist</h1>
      <Row className="favorite-movies">{cards}</Row>
    </Row>
  );
}

export default Watchlist;
