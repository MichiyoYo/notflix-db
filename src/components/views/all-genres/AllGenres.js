import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function AllGenres(props) {
  return (
    <Row className="justify-content-center">
      <h1 className="text-center mb-50">Genres</h1>
      <Col lg={4} sm={12}>
        <ListGroup className="genre-list">
          {props.genres.map((genre) => (
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
