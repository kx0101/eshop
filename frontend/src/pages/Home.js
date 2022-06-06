import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Home = () => {
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, error]);

  return (
    <>
      <main className="py-3">
        <Container>
          <h1>Latest Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
