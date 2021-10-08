import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

/**
 * NotFound component, renders a "not found" message when there are no matching urls in the router
 * @param {} props
 * @returns a JSX element that displays a not found message
 */
function NotFound(props) {
  const back = useHistory();
  return (
    <Row className="not-found justify-content-center">
      <Col md={6} sm={12} className="text-center copy">
        <h2 className="mb-40"> Page not found</h2>
        <h3 className="mb-50">🦗</h3>
        <Button onClick={() => back.goBack()}>Go Back</Button>
      </Col>
    </Row>
  );
}

export default NotFound;
