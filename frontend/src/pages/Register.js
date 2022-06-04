import React, { useState , useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import Loader from "../components/Loader"
import FormContainer from "../components/FormContainer"
import { register } from '../actions/userActions'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading, error, userInfo } = useSelector(state => state.userRegister)

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [dispatch, userInfo, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(message, error);

        // Validation
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.")
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
                
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button className="mt-4" type="submit" variant="primary">
                    Sign Up
                </Button>
            </Form>

            <Row className="py-3">
            <Col>
                Already a Customer? <Link to={'/login'}>Sign In</Link>
            </Col>
            </Row>

        </FormContainer>
    )
}

export default Register