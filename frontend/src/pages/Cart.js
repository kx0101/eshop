import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';

const Cart = () => {

  const { productId } = useParams();
  
  const location = useLocation();
  const query = new URLSearchParams(location.search) // location.search = '?qty=3'
  const qty = query.get('qty') // qty = '3'

  if(!qty) {
    qty = 1;
  }

  const dispatch = useDispatch();

  useEffect(() => {

    if (productId) {
      dispatch(addToCart(productId, qty))
    }

  }, [dispatch, productId, qty])

  return (
    <div>Cart</div>
  )
}

export default Cart