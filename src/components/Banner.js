import React from "react";
import Slider from "react-slick";
import a1 from "../images/i1.jpg";
import a2 from "../images/i2.jpg";
import a3 from "../images/i3.jpg";
import a4 from "../images/i4.jpg";
import "../css/banner.css";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs";

const Banner = () => {
    const CustomArrow = ({ className, style, onClick }) => (
        <div
          className={className}
        //   style={{ ...style, backgroundColor: 'red', fontSize: "50px" }}
          onClick={onClick}
        >
        btn
        </div>
      );

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow className="slick-prev" />,
    nextArrow: <CustomArrow className="slick-next" />,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
     <div className="banner">
     <div className="banner_main">
        <Slider {...settings}>
          <div className="banner_card">
            <img src={a1} alt="first" />
          </div>
          <div className="banner_card">
            <img src={a2} alt="first" />
          </div>
          <div className="banner_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner_card">
            <img src={a4} alt="first" />
          </div>
        </Slider>
      </div>
      <div className="banner_text">
        <h1>Welcome to <br /> <span>SumitNain.in</span> </h1>
      </div>
     </div>
    </>
  );
};

export default Banner;
