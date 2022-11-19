import { Routes , Route , Navigate} from 'react-router-dom';
import React from 'react';
import Home from "../pages/Home";
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import ProductDetails from "../pages/ProductDetails"
import Shop from "../pages/Shop"
import SignUp from "../pages/SignUp"
import About from "../pages/About "

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="shop/:id" element={<ProductDetails/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path = "about" element = {<About/>}/>
    </Routes>
  )
}

export default Router
