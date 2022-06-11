import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import UserList from "./pages/UserList";
import UserEdit from "./pages/UserEdit";
import ProductList from "./pages/ProductList";
import ProductEdit from "./pages/ProductEdit";
import OrderList from "./pages/OrderList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<h2>Not Found</h2>} />

          <Route path="/search/:keyword" element={<Home />} />

          <Route path="/page/:pageNumber" element={<Home />} />

          <Route path="/search/:keyword/page/:pageNumber" element={<Home />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/cart/:id" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/products/:id" element={<Product />} />

          <Route path="/shipping" element={<Shipping />} />

          <Route path="/payment" element={<Payment />} />

          <Route path="/placeorder" element={<PlaceOrder />} />

          <Route path="/admin/userlist" element={<UserList />} />

          <Route path="/admin/user/:id/edit" element={<UserEdit />} />

          <Route path="/admin/productlist" element={<ProductList />} />

          <Route
            path="/admin/productlist/:pageNumber"
            element={<ProductList />}
          />

          <Route path="/admin/product/:id/edit" element={<ProductEdit />} />

          <Route path="/admin/orderlist" element={<OrderList />} />

          <Route path="/order/:id" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
