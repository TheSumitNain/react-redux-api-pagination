import React from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import CartPage from "./components/CartPage";
import {Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </>
  )
}

export default App;