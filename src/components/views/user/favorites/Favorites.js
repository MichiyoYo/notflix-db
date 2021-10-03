import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../../../movie-card/MovieCard";

function Favorites(props) {
  const { userData, movies } = props;

  const favs = [];
  userData.FavoriteMovies.map((movie) => favs.push(movie._id));

  const filteredMovies = [];
  favs.forEach((movieId) =>
    filteredMovies.push(movies.find((movie) => movie._id === movieId))
  );

  const cards = [];
  filteredMovies.map((movie) => {
    cards.push(<MovieCard key={movie._id} movieData={movie} />);
  });

  return (
    <Row>
      <h1 className="text-center mb-50">Favorites</h1>
      <Row className="favorite-movies">{cards}</Row>
    </Row>
  );
}

export default Favorites;
