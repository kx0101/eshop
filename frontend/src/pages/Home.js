import React from 'react'
import products from "../products";
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer';
import Product from "../components/Product";

const Home = () => {
  return (
    <>
        <main className="py-3">
            <Container>
                <h1>Latest Products</h1>
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
        <Footer />
    </>
  )
}

export default Home