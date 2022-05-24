import React from "react";

import { Link, useLocation } from "react-router-dom";
import "./MyButton.css";

function MyButton(props) {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <Link className="btn btn-outline-light btn-lg" role="button" to="/browse">
        {props.message}
      </Link>
    </div>
  );
}

export default MyButton;
