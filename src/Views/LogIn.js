import React, { useState, useContext } from "react";
import MyButton from "../Components/buttons/MyButton.js";
import Likes from "../Components/Likes";
import { Form, Row, Button } from "react-bootstrap";
import { AuthContext } from "../Contexts/AuthContext.js";
import { useNavigate, Link } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    return <p>You have logged in</p>;
  };

  return (
    <div>
      <Row className="gx-5 gy-2 " xs={1} md={2}>
        {/* <MyButton message={"Log in"} login={login} /> */}

        {/* WHY DOESN'T MYBUTTON WORK BELOW?!?!?! */}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label for="exampleEmail">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="exampleEmail"
              value={email}
              placeholder="john.smith@mail.com"
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label for="examplePassword">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="examplePassword"
              value={password}
              placeholder="required"
              onChange={handlePasswordChange}
            />
            <Button type="submit" message={"Log in"} />
          </Form.Group>
        </Form>

        {/* {user ? (
          <button v onClick={logout}>
            Log Out
          </button>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="john.smith@mail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label for="examplePassword">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="examplePassword"
                placeholder="required"
              />
              <MyButton message="Log in" login={login} />
            </Form.Group>
          </Form>
        )} */}

        <div>
          <h3>
            Don't have an account? Register <Link to="/register">here:</Link>
          </h3>
          {/* <Form className="mx-3">
            <Form.Group className="mb-3">
              <Form.Label for="exampleEmail">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="john.smith@mail.com"
              />
            </Form.Group>
          </Form>
          <MyButton message="Register" /> */}
        </div>
      </Row>
    </div>
  );
}

export default LogIn;
