import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function NotFound(props) {
  const back = useHistory();
  return (
    <Row className="not-found justify-content-center">
      <Col md={6} sm={12} className="text-center copy">
        <h2 className="mb-40"> Page not found</h2>
        <h3 className="mb-50">🦗</h3>
        <Button onClick={() => back.goBack()}>Go Home 🏠</Button>
      </Col>
    </Row>
  );
}

export default NotFound;
