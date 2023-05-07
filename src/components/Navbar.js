import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const productData = useSelector((state) => state.counterSlice.productData);
  return (
    <>
      <div className="nav_main">
        <Link style={{textDecoration:"none"}} to="/">
          <h2>Shopper</h2>
        </Link>
        <Link style={{textDecoration:"none"}} to="/cart">
          <p>
             <span><BsCart4 /></span>cart
            <span> {productData.length ? productData.length : 0} </span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
