import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AllActors(props) {
  return (
    <Row className="justify-content-center">
      <h1 className="text-center mb-50">Actors</h1>
      <Col lg={4} sm={12}>
        <ListGroup className="actor-list">
          {props.actors.map((actor) => (
            <ListGroup.Item key={actor._id} className="text-center">
              <Link to={`/actors/${actor.Name}`}>{actor.Name}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default AllActors;

AllActors.propTypes = {
  actors: PropTypes.array.isRequired,
};
