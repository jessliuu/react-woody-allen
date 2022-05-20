import React from "react";
import { Link } from "react-router-dom";
import "./MyButton.css";

function MyButton(props) {
  return (
    <div>
      <Link className="btn btn-outline-light btn-lg" role="button" to="/browse">
        {props.message}
      </Link>
    </div>
  );
}

export default MyButton;
