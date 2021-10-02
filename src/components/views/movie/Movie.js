import React, { useState } from "react";
import { Row, Col, Image, Button, Alert, Toast } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import Rating from "../../rating/Rating";
import axios from "axios";
import { addToFavorites, addToWatchlist } from "../../../helpers/movieOps";

function Movie(props) {
  const { movieData } = props;
  const historyData = useHistory();

  const [addedToFavs, setAddedToFavs] = useState(false);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);
  const [showFavToast, setShowFavToast] = useState(false);
  const [showWatchlistToast, setShowWatchlistToast] = useState(false);

  const userSession = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
  };

  const cast = [];
  movieData.Cast.forEach((actor) =>
    cast.push(
      <li key={actor._id}>
        <Link to={`/actors/${actor.Name}`}>{actor.Name}</Link>
      </li>
    )
  );

  const date = new Date(movieData.ReleaseDate);

  return (
    <Row className="movie-details">
      <Col sm={12} className="movie-header">
        <Row>
          <Button onClick={() => historyData.goBack()} className="back-btn">
            <i className="fas fa-times"></i>
          </Button>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <Image className="movie-poster" src={movieData.ImagePath} />
          </Col>
          <Col md={6} sm={12} className="movie-info">
            <h2 className="movie-title mb-20">{movieData.Title}</h2>
            <Link to={`/genres/${movieData.Genre.Name}`}>
              <Button variant="secondary">{movieData.Genre.Name}</Button>
            </Link>
            <Rating value={movieData.Rating} />

            <p className="release-date mt-20">
              <span>Release Date: </span>
              {date.getMonth() +
                1 +
                "/" +
                date.getDate() +
                "/" +
                date.getFullYear()}
            </p>

            <p className="director">
              <span>Director: </span>
              <Link to={`/directors/${movieData.Director.Name}`}>
                {movieData.Director.Name}
              </Link>
            </p>
            <p className="cast">Cast: </p>
            <ul className="cast-list">{cast}</ul>
            <p className="movie-description">{movieData.Description}</p>

            <div className="interactions mt-50">
              <Button
                className="add-to-watchlist-btn"
                variant="primary mr-20"
                title="Add to Watchlist"
                onClick={() => {
                  addToWatchlist(
                    userSession.user,
                    userSession.token,
                    movieData._id
                  )
                    .then(() => {
                      setAddedToWatchlist(true);
                      setShowWatchlistToast(true);
                    })
                    .catch((err) => {
                      setAddedToWatchlist(false);
                    });
                }}
              >
                <i className="far fa-bookmark"></i> Add to Watchlist
              </Button>
              <Button
                className="add-to-favs-btn"
                variant="primary"
                title="Add to Favorites"
                onClick={() => {
                  addToFavorites(
                    userSession.user,
                    userSession.token,
                    movieData._id
                  )
                    .then(() => {
                      setAddedToFavs(true);
                      setShowFavToast(true);
                    })
                    .catch((err) => {
                      setAddedToFavs(false);
                    });
                }}
              >
                <i className="far fa-heart"></i> Add to Favorites
              </Button>
            </div>
            {addedToFavs ? (
              <Toast
                onClose={() => setShowFavToast(false)}
                show={showFavToast}
                delay={2000}
                autohide
                className="mt-20"
              >
                <Toast.Header>
                  <strong className="me-auto">Added to your Favorites!</strong>
                </Toast.Header>
              </Toast>
            ) : (
              ""
            )}

            {addedToWatchlist ? (
              <Toast
                onClose={() => setShowWatchlistToast(false)}
                show={showWatchlistToast}
                delay={2000}
                autohide
                className="mt-20"
              >
                <Toast.Header>
                  <strong className="me-auto">Added to your Watchlist!</strong>
                </Toast.Header>
              </Toast>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Movie;
