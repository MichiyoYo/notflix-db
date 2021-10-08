import React from "react";
import { useHistory } from "react-router";
import { Row, Col, Button } from "react-bootstrap";
import MovieCard from "../../../movie-card/MovieCard";
import { removeFromFavorites } from "../../../../helpers/movieOps";
import { connect } from "react-redux";
import { updateUser } from "../../../../actions/actions";

const mapStateToProps = (state) => {
  const { userData } = state;
  return { userData };
};

function Favorites(props) {
  const { userData, movies } = props;
  const historyData = useHistory();

  const userSession = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
  };

  const hanldeRemoveMovie = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const movieToRemove = e.target.parentElement.parentElement;
    const movieToRemoveId = movieToRemove.getAttribute("index");

    removeFromFavorites(userSession.user, userSession.token, movieToRemoveId)
      .then(() => {
        userData.FavoriteMovies = userData.FavoriteMovies.filter(
          (movie) => movie._id != movieToRemoveId
        );
        movieToRemove.classList.add("d-none");
        props.updateUser(userData);
      })
      .catch((err) => console.error(err));
  };

  const favs = [];
  userData.FavoriteMovies.map((movie) => favs.push(movie._id));

  const filteredMovies = [];
  favs.forEach((movieId) =>
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
    <Row className="favorites-view detail-view justify-content-center">
      <Col sm={12}>
        <Row>
          <Button onClick={() => historyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col sm={12}>
            <h1 className="text-center mb-50">Favorites</h1>
            <Row className="favorite-movies">
              {cards.length > 0 ? (
                cards
              ) : (
                <p className="text-center">You have no favorites 🤷</p>
              )}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default connect(mapStateToProps, { updateUser })(Favorites);
