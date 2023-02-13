import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiox from 'axios';
import { useNavigate } from 'react-router-dom';

function Login ({setLogoutUser}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if (shouldRedirect) navigate("/");
      }, [shouldRedirect]);
    const login = (e) => {
      e.preventDefault();
      axiox.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        }).then((response) => {
          console.log("response login", response);
          localStorage.setItem("login",JSON.stringify({userLogin: true,token: response.data.access_token,}));
          setError("");
          setEmail("");
          setPassword("");
          setLogoutUser(false);
          setShouldRedirect(true);
          //navigate("/");
        }).catch((error) => setError(error.response.data.message));
    };
    return (
      <div style={{ marginTop: "100px" }}>
        <h2>Login Page</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={login}>
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
        Submit
      </Button>
    </Form>
       
      </div>
    );
}

export default Login;
