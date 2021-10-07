import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Genre from "../genre/Genre";

function AllGenres(props) {
  const { genres, movies } = props;
  console.log(movies);
  return (
    <Row className="justify-content-center">
      <h1 className="text-center mb-50">Genres</h1>
      <Col lg={4} sm={12}>
        <ListGroup className="genre-list">
          {genres.map((genre) => (
            <ListGroup.Item key={genre._id} className="text-center">
              <Link to={`/genres/${genre.Name}`}>{genre.Name}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default AllGenres;
