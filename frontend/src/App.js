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

const App = () => {
  return (
    <>
    <BrowserRouter>

      <Header />

      <Routes>

          <Route path="/" element={<Home />}>

          </Route>

          <Route path="/cart" element={<Cart />}>

          </Route>

          <Route path="/login" element={<Login />}>

          </Route>

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
