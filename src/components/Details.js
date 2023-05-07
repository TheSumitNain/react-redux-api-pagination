import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const productData = location.state.productData;
  console.log(productData);
  return (
    <>
      <h1>hye details</h1>
    </>
  );
};

export default Details;
