import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../Contexts/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { errorfromReg } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { register } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("email in register", email);
    if (email.includes("@") && password.length > 5) {
      // console.log("good");
      register(email, password);
      setError(null);
    } else {
      // console.log("invalid");
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <Form onSubmit={handleRegister}>
        <Form.Group className="m-3">
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
        <Form.Group className="m-3">
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
        <Button type="submit" variant="outline-light" className="m-3">
          Sign me up!
        </Button>
      </Form>
      <div>
        {error && <p>{error}</p>}
        {errorfromReg && <p>{errorfromReg}</p>}
      </div>
    </div>
  );
}

export default Register;
