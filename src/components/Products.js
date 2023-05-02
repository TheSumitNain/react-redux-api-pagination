import React, { useEffect, useState } from "react";
import "../css/products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/rootReducer";

const Products = () => {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.counterSlice.productData);
  console.log(state);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const dispatch = useDispatch();

  const apiData = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const res = await result.json();
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    apiData();
  }, [data]);

  const lastIndex = currentPage * itemsPerPage;

  const firstIndex = lastIndex - itemsPerPage;

  const currentData = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevState => prevState - 1);
  };
  
  return (
    <>
      <div className="products_main">
        <div className="card">
            {
                currentData.map((item) => {
                  return <div className="card_inner">
                       <div className="item_pic_div">
                        <img src={item.image} alt="image" />
                       </div>
                       <h3> {item.title.slice(0, 25)} </h3>
                       <p> {item.description.slice(0, 60)} </p>
                       <div className="price_category">
                       <p> Category: {item.category}</p>
                        <p> Price: ${item.price} </p>
                       </div>
                       <button onClick={() => dispatch(addToCart({
                        id:item.id,
                        title: item.title,
                        image: item.image,
                        description: item.description,
                        category: item.category,
                        quantity: 1,
                       }))}>
                       Add to cart</button>
                  </div>
                })
            }
        </div>
        <ul className="pagination">
        {/* <li onClick={prevPage} disabled={currentPage === 1}> */}
        <li onClick={prevPage} className={currentPage == 1 ? 'hide' : 'show'}>
          Previous
        </li>

        {pageNumbers.map(number => (
          <li key={number} onClick={() => setCurrentPage(number)}
           className={currentPage === number ? 'active' : null}>
            {number}
          </li>
        ))}

        {/* <li onClick={nextPage} disabled={currentPage === totalPages}> */}
        <li onClick={nextPage} className={currentPage == totalPages ? 'hide' : 'show'}>
          Next
        </li>
      </ul>

      </div>
    </>
  );
};

export default Products;
