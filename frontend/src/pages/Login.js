import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import { login } from '../actions/userActions'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector(state => state.userLogin)

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [dispatch, userInfo, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password))

  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

        <Button className="mt-4" type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer? <Link to={'/register'}>Sign Up</Link>
        </Col>
      </Row>

    </FormContainer>
  )
}

export default Login