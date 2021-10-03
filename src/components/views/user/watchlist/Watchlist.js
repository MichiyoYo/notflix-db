import React from "react";
import { useHistory } from "react-router";
import { Row, Col, Button } from "react-bootstrap";

import MovieCard from "../../../movie-card/MovieCard";

function Watchlist(props) {
  const { userData, movies } = props;
  const historyData = useHistory();

  const watchlist = [];
  userData.WatchList.map((movie) => watchlist.push(movie._id));

  const filteredMovies = [];
  watchlist.forEach((movieId) =>
    filteredMovies.push(movies.find((movie) => movie._id === movieId))
  );

  const cards = [];
  filteredMovies.map((movie) => {
    cards.push(
      <Col
        className="d-flex align-items-center flex-column card-wrap"
        key={movie._id}
      >
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
    <Row className="watchlist-view detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={() => historyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h1 className="text-center mb-50">Watchlist</h1>
            <Row className="favorite-movies">{cards}</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Watchlist;
