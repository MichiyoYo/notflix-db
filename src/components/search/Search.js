import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setFilter } from "../../actions/actions";

function Search(props) {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 search-input"
        aria-label="Search"
        onChange={(e) => props.setFilter(e.target.value)}
        value={props.visibilityFilter}
      />
    </Form>
  );
}

export default connect(null, { setFilter })(Search);
