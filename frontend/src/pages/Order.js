import React, { useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from "../components/Message"
import Loader from "../components/Loader"
import CheckoutSteps from "../components/CheckoutSteps"
import { Link } from 'react-router-dom';
import { getOrderDetails } from "../actions/orderActions"

const Order = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { order, loading, error } = useSelector(state => state.orderDetails)

    let itemsPrice = 0;

    if (!loading) {
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2)
        }

        itemsPrice = addDecimals(
            order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        )
    }

    useEffect(() => {
        if  (!order || order._id !== id) {
            dispatch(getOrderDetails(id))
        }
    }, [dispatch, id])

  return loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : <>
    <h1 style={{ 'marginLeft': 5 }}>Order {order._id}</h1>
    <Row style={{ 'marginLeft': 5 }}>
        <Col md={8}>
            <ListGroup variant="fluid">
                
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p><strong>Name: </strong> {order.user.name}</p>
                    <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                    <p>
                        <strong>Address: </strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city} {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                    </p>
                    {order.isDelivered ? <Message variant="success">Delivered on {order.deliveredAt}</Message> : <Message variant="danger">Not Delivered</Message>}

                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                    </p>
                    {order.isPaid ? <Message variant="success">Paid on {order.paidAt}</Message> : <Message variant="danger">Not Paid</Message>}
                </ListGroup.Item>

                <ListGroup.Item>
                    <h2>Order Items</h2>
                    {order.orderItems.length === 0 ? <Message>Your order is empty</Message> : (
                        <ListGroup variant="flush">
                            {order.orderItems.map((item, index) => (
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={1}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col>
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={4}>
                                            {item.qty} x {item.price} € = {item.qty * item.price} €
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </ListGroup.Item>

            </ListGroup>
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant="flush">

                    <ListGroup.Item>
                        <h2>Order Summary</h2>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Items</Col>
                            <Col>{itemsPrice} €</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping</Col>
                            <Col>{order.shippingPrice} €</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Tax</Col>
                            <Col>{order.taxPrice} €</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Total</Col>
                            <Col>{order.totalPrice} €</Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        {error && <Message variant="danger">{error}</Message>}
                    </ListGroup.Item>

                </ListGroup>
            </Card>
        </Col>
    </Row>
  </>
}

export default Order