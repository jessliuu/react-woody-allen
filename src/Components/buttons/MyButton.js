import React from "react";

import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./MyButton.css";

function MyButton(props) {
  return (
    <div>
      <Button variant="outline-light" onClick={props.login}>
        {props.message}
      </Button>
    </div>
  );
}

export default MyButton;
