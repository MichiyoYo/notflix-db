import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";

function Movie(props) {
  const { movieData, onBackClick } = props;

  return (
    <Row className="movie-details">
      <Col sm={12} className="movie-header">
        <Row>
          <Col md={6} sm={12} className="d-flex justify-content-center">
            <Image className="movie-poster" src={movieData.ImagePath} />
          </Col>
          <Col md={6} sm={12} className="movie-info">
            <h2 className="movie-title mb-20">{movieData.Title}</h2>
            <Link to={`/genres/${movieData.Genre.Name}`}>
              <Button variant="secondary">{movieData.Genre.Name}</Button>
            </Link>
            <Rating value={movieData.Rating} />
            <p className="mt-30 movie-description">{movieData.Description}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Movie;
