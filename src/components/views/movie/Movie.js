import React, { useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";

function Movie(props) {
  const { movieData, onBackClick } = props;
  const date = new Date(movieData.ReleaseDate);

  const cast = [];
  movieData.Cast.forEach((actor) =>
    cast.push(
      <li key={actor._id}>
        <Link to={`/actors/${actor._id}`}>{actor.Name}</Link>
      </li>
    )
  );

  return (
    <Row className="movie-details">
      <Col sm={12} className="movie-header">
        <Row>
          <Button onClick={onBackClick} className="back-btn">
            <i class="fas fa-times"></i>
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

            <div className="interactions">
              <Button variant="link mr-20" title="Add to Watchlist">
                <i className="far fa-bookmark"></i>
              </Button>
              <Button variant="link" title="Add to Favorites">
                <i className="far fa-heart"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Movie;
