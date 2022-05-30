import React, { useState, useContext } from "react";
import MyButton from "../Components/buttons/MyButton.js";
import Likes from "../Components/Likes";
import { Form, Row } from "react-bootstrap";
import { AuthContext } from "../Contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const redirectTo = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setUser({ userName: "Raul" });
    console.log(user.userName);
    redirectTo("/discuss");
    // return <p>You have logged in</p>;
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      <Row className="gx-5 gy-2 " xs={1} md={2}>
        <MyButton message={"Log in"} login={login} />

        {/* WHY DOESN'T MYBUTTON WORK BELOW?!?!?! */}
        {/* <Form>
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
            <MyButton message={"Log in"} login={login} />
          </Form.Group>
        </Form> */}

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

        {/* <div>
          <h3>Don't have an account? Register here:</h3>
          <Form className="mx-3">
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
          <MyButton message="Register" />
        </div> */}
      </Row>
    </div>
  );
}

export default LogIn;
