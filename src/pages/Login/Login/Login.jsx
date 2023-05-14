import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const {signInUser} = useContext(AuthContext);
  // redirect home page when login-----
  const navigate = useNavigate();
  // redirect the location of page-----
  const location = useLocation();
  console.log('Login page location', location);
  const from = location.state?.from?.pathname || '/category/0';


  const handleLogin  = event =>{
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
   
    console.log( email, password);

    signInUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      navigate(from, {replace: true});
    })
    .catch(error => console.log(error))

  }
  return (
    <Container className="w-25 mx-auto border-2 p-4 rounded-4 mt-5 shadow-lg">
        <h3 className="text-center text-warning">Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />


        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
            Don't have an account? <Link to="/register" className="text-decoration-none">register</Link>
          </Form.Text>
          <br />
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
