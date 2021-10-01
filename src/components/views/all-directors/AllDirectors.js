import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllDirectors(props) {
  return (
    <Row className="justify-content-center">
      <h1 className="text-center mb-50">Directors</h1>
      <Col lg={4} sm={12}>
        <ListGroup className="director-list">
          {props.directors.map((director) => (
            <ListGroup.Item key={director._id} className="text-center">
              <Link to={`/directors/${director.Name}`}>{director.Name}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default AllDirectors;
