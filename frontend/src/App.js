import React from 'react'
import Header from './components/Header'
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from "./pages/Register";
import Profile from "./pages/Profile"

const App = () => {
  return (
    <>
    <BrowserRouter>

      <Header />

      <Routes>

          <Route path="*" element={<h2>Not Found</h2>} />

          <Route path="/" element={<Home />} />

          {/* <Route path="/cart" element={<Cart />} /> */}

          <Route path="/cart/:id" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/profile" element={<Profile />} />
          
          <Route path="/products/:id" element={<Product />} />

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
