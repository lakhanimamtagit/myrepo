import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import axiox from "axios";
import { useNavigate } from 'react-router-dom';


const Register = ({ setLogoutUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axiox
      .post("http://localhost:5000/api/auth/register", {
        email,
        password,
      })
      .then((response) => {
        console.log("response", response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            userLogin: true,
            token: response.data.access_token,
          })
        );
        setError("");
        setEmail("");
        setPassword("");
        setLogoutUser(false);
        navigate("/");
      })
      .catch((error) => setError(error.response.data.message));
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Register Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Form onSubmit={register}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
      Register
      </Button>
    </Form>
      <p>
        Already have an account then please <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
