import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/cartpage.css";
import { deleteItem, minusQuantity, plusQuantity, resetCart } from "../redux/rootReducer";

const CartPage = () => {
  const productData = useSelector((state) => state.counterSlice.productData);
//   const [state, setState] = useState(productData);
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart_main">
        <div className="cart_box">
          {productData.map((item) => {
            return (
              <div className="cart_inner">
                <div className="cart_img">
                  <img src={item.image} alt="pic" />
                </div>
                <p>{item.title.slice(0, 45)}</p>
              
                <button className="btn"
                  onClick={() =>
                    dispatch(
                      minusQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        category: item.category,
                        quantity: 1,
                      })
                    )
                  }
                >
                  -
                </button>
                <p> {item.quantity} </p>
                <button className="btn"
                  onClick={() =>
                    dispatch(
                      plusQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        category: item.category,
                        quantity: 1,
                      })
                    )
                  }
                >
                  +
                </button>
                <button className="remove" onClick={() => dispatch(deleteItem(item.id))}>
                  remove
                </button>
              </div>
              
            );
          })}
          <button className="reset" onClick={() => dispatch(resetCart())}>reset</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
