import React, { useEffect, useState } from "react";
import "../css/products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/rootReducer";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Products = () => {
  const productData = useSelector((state) => state.counterSlice.productData);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [ItemPerPage] = useState(10);

  const getData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const res = await result.json();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const lastIndex = currentPage * ItemPerPage;
  const firstIndex = lastIndex - ItemPerPage;

  const currentData = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / ItemPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  return (
    <>
    <Banner/>
      <div className="products_main">
        <div className="product_inner">
          {currentData.map((item) => {
            return (
              <div className="product_card">
                <div className="product_card_inner">
                  <div className="product_img_div">
                    <img src={item.image} alt="product_image" />
                  </div>
                  <h2> {item.title.slice(0, 15)} </h2>
                  <p> {item.description.slice(0, 50)} </p>
                  <div className="price_cart">
                    <h3>
                      <span>$</span>
                      {item.price}
                    </h3>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            quantity: 1,
                            image: item.image,
                          })
                        )
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                  <Link to={{
              pathname: `/products/${item.id}`,
              state: { productData: item },
            }}><button> details </button></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ul className="pagination">
        <li onClick={prevPage} className={currentPage == 1 ? "hide" : "show"}>
          Previous
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? "active" : null}
          >
            {number}
          </li>
        ))}
        <li
          onClick={nextPage}
          className={currentPage == totalPages ? "hide" : "show"}
        >
          Next
        </li>
      </ul>
    </>
  );
};

export default Products;
