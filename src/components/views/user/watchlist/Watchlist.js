import React from "react";
import { useHistory } from "react-router";
import { Row, Col, Button } from "react-bootstrap";
import MovieCard from "../../../movie-card/MovieCard";
import { removeFromWatchlist } from "../../../../helpers/movieOps";
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/actions";

const mapStateToProps = (state) => {
  const { userData } = state;
  return { userData };
};

/**
 * Watchlist component, renders a list of movie cards created from the movie list the user wants to watch
 * @param {} props
 * @returns a JSX element that holds the list of movies that the user wants to watch
 */
function Watchlist(props) {
  const { userData, movies } = props;
  const historyData = useHistory();

  const userSession = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
  };

  const hanldeRemoveMovie = (e) => {
    e.preventDefault();

    const movieToRemove = e.target.parentElement.parentElement;
    const movieToRemoveId = movieToRemove.getAttribute("index");

    removeFromWatchlist(userSession.user, userSession.token, movieToRemoveId)
      .then(() => {
        userData.WatchList = userData.WatchList.filter(
          (movie) => movie._id != movieToRemoveId
        );
        movieToRemove.classList.add("d-none");
        props.updateUser(userData);
      })
      .catch((err) => console.error(err));
  };

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
        className="d-flex align-items-center flex-column card-wrap mb-40"
        key={movie._id}
        index={movie._id}
      >
        <MovieCard key={movie._id} movieData={movie} />
        <Button
          variant="link"
          className="remove-btn"
          title="Remove from list"
          onClick={hanldeRemoveMovie}
        >
          <i className="fas fa-trash-alt"></i> Remove
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
            <Row className="watchlist-movies">
              {" "}
              {cards.length > 0 ? (
                cards
              ) : (
                <p className="text-center">
                  You have no movies in your watchlist 🤷
                </p>
              )}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default connect(mapStateToProps, { updateUser })(Watchlist);
