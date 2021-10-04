import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { addToFavorites, addToWatchlist } from "../../helpers/movieOps";

function MovieCard(props) {
  const { movieData } = props;

  const userSession = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={movieData.ImagePath}
        alt={`${movieData.Title} Poster `}
      />

      <Card.Body>
        <Card.Title>{props.movieData.Title}</Card.Title>
        <Card.Text>{movieData.Description.slice(0, 100) + "..."}</Card.Text>
        <div className="buttons">
          <Link to={`/movies/${movieData._id}`}>
            <Button variant="primary">Details</Button>
          </Link>
          <div className="interactions d-inline-block">
            <Button
              variant="link mr-20"
              title="Add to Watchlist"
              onClick={(e) => {
                addToWatchlist(
                  userSession.user,
                  userSession.token,
                  movieData._id
                )
                  .then(() => {
                    e.target.classList.remove("far");
                    e.target.classList.add("fas");
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            >
              <i className="far fa-bookmark"></i>
            </Button>
            <Button
              variant="link"
              title="Add to Favorites"
              onClick={(e) => {
                addToFavorites(
                  userSession.user,
                  userSession.token,
                  movieData._id
                )
                  .then(() => {
                    e.target.classList.remove("far");
                    e.target.classList.add("fas");
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }}
            >
              <i className="far fa-heart"></i>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string,
    Description: PropTypes.string.isRequired,
    Featured: PropTypes.bool,
    ReleaseDate: PropTypes.string,
    Rating: PropTypes.number,
    Cast: PropTypes.array,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      BirthDate: PropTypes.string,
      DeathDate: PropTypes.string,
    }),
  }).isRequired,
};
