import React from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import CartPage from "./components/CartPage";
import {Routes, Route} from "react-router-dom"
import Details from "./components/Details";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path='/products/:id' element={<Details/>} />
      </Routes>
    </>
  )
}
   
export default App;