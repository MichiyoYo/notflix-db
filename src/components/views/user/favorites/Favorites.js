import React from "react";
import { useHistory } from "react-router";
import { Row, Col, Button } from "react-bootstrap";
import MovieCard from "../../../movie-card/MovieCard";

function Favorites(props) {
  const { userData, movies } = props;
  const historyData = useHistory();

  const favs = [];
  userData.FavoriteMovies.map((movie) => favs.push(movie._id));

  const filteredMovies = [];
  favs.forEach((movieId) =>
    filteredMovies.push(movies.find((movie) => movie._id === movieId))
  );

  const cards = [];
  filteredMovies.map((movie) => {
    cards.push(
      <Col className="d-flex align-items-center flex-column card-wrap">
        <MovieCard key={movie._id} movieData={movie} />
        <Button
          variant="primary"
          className="remove-btn"
          title="Remove from list"
        >
          <i className="fas fa-trash-alt"></i>
        </Button>
      </Col>
    );
  });

  return (
    <Row className="favorites-view detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={() => historyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h1 className="text-center mb-50">Favorites</h1>
            <Row className="favorite-movies">{cards}</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Favorites;
