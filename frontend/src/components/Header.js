import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import SearchBox from "../components/SearchBox";

const Header = () => {
  const { userInfo, loading, error } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">eShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Nav.Link>
                    <NavDropdown.Item onClick={() => navigate("/profile")}>
                      Profile
                    </NavDropdown.Item>
                  </Nav.Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="us">
                  <Nav.Link>
                    <NavDropdown.Item
                      onClick={() => navigate("/admin/userlist")}
                    >
                      Users
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item
                      onClick={() => navigate("/admin/productlist")}
                    >
                      Products
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item
                      onClick={() => navigate("/admin/orderlist")}
                    >
                      Orders
                    </NavDropdown.Item>
                  </Nav.Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
