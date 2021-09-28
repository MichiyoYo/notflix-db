import { Button } from "react-bootstrap";
import React from "react";

function Home(props) {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>This is the content of the home page</p>
      <Button variant="success"> Click me</Button>
    </div>
  );
}

export default Home;
