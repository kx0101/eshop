import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  const params = useParams();

  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, error, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <main className="py-3">
        <Container>
          {!keyword ? (
            <ProductCarousel />
          ) : (
            <Link to="/" className="btn btn-light">
              Go Back
            </Link>
          )}
          <h1>Latest Products</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ""}
              />
            </>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
