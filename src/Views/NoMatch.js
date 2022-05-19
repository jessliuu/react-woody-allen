import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function NoMatch() {
  return (
    <div>
      <p>Oops, page not found!</p>
      <Button>
        <Link to="/browse">Browse again</Link>
      </Button>
    </div>
  );
}

export default NoMatch;
