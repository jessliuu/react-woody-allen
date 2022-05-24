import React, { useState } from "react";
import MyButton from "../Components/MyButton/MyButton.js";
import Likes from "../Components/Likes";
import { Form, Row } from "react-bootstrap";

function LogIn() {
  // const [user, setUser] = useState(null);
  // const login = () => {
  //   setUser({ userName: "Raul", likes : 2 });
  //   console.log(user);
  // };
  return (
    <div>
      <Row className="gx-5 gy-2 " xs={1} md={2}>
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
            <MyButton message="Log in" />
          </Form.Group>
        </Form>

        <div>
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
        </div>
      </Row>
    </div>
  );
}

export default LogIn;
