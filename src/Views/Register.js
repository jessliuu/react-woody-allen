import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../Contexts/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { register } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      console.log("good");
      register(email, password);
    } else {
      console.log("invalid");
      // return <p>Invalid email or password.</p>;
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label for="exampleEmail">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="john.smith@mail.com"
            onChange={handleEmailChange}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label for="examplePassword">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="examplePassword"
            placeholder="required"
            onChange={handlePasswordChange}
            value={password}
          />
        </Form.Group>
        <button type="submit">Sign me up!</button>
      </Form>
    </div>
  );
}

export default Register;
