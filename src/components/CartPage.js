import React from "react";
import {
  addToCart,
  minusQuantity,
  plusQuantity,
  deleteItem,
  resetCart,
} from "../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import "../css/cartpage.css";
import Banner2 from "./Banner2";

const CartPage = () => {
  const productData = useSelector((state) => state.counterSlice.productData);
  const dispatch = useDispatch();

  return (
    <>
      <Banner2/>
      <div className="cart_main">
          {productData.map((item) => {
            return (
              <div className="cart_card">
                <div className="cart_card_inner">
                  <div className="cart_img_div">
                    <img src={item.image} alt="cart_image" />
                  </div>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <p className="quantity">
                      <span onClick={() => dispatch(minusQuantity({
                        id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            quantity: 1,
                            image: item.image
                      }))}
                      > - </span>
                      {item.quantity}
                      <span  onClick={() => dispatch(plusQuantity({
                        id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            quantity: 1,
                            image: item.image
                      }))}
                      > + </span>
                    </p>
                  </div>
                  <div>
                    <button onClick={() => dispatch(deleteItem(item.id))}> remove </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default CartPage;
