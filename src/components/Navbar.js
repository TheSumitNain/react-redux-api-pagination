import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.css";
import {BsCart4} from "react-icons/bs"
import { Link } from 'react-router-dom';


const Navbar = () => {
  const productData = useSelector((state) => state.counterSlice.productData);

  return (
    <>
        <div className='narbar_main'>
         
         <Link to="/"><h2>Shopper</h2></Link>
         <Link to="/cart"><p className='cart'>
         <BsCart4/>
         <span> {productData.length > 0 ? productData.length : 0} </span>
          </p></Link>
        </div>
    </>
  )
}

export default Navbar