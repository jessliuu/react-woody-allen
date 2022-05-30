import React from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

function Discuss() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <h2>Discuss</h2>
      {user && <p>Hello, {user.userName}</p>}
    </div>
  );
}

export default Discuss;
