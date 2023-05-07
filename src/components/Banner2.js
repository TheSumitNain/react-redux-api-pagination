import React from "react";
import Slider from "react-slick";
import a1 from "../images/b1.jpg";
import a2 from "../images/b2.jpeg";
import a3 from "../images/b3.jpg";
import a4 from "../images/b4.jpeg";
import "../css/banner2.css";

const Banner2 = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
          />
        );
      }
    
  const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: -1,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 0,
      cssEase: "linear",  
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",  
    nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />
};

const settings3 = {
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: -1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",  
    nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />
};

  return (
    <>
    <div className="banner2">
     <div className="banner_inner">
     <div className="banner2_main">
        <Slider {...settings}>
          <div className="banner2_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a2} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a1} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a4} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a1} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a4} alt="first" />
          </div>
        </Slider>
      </div>
      <div className="banner2_main">
        <Slider {...settings2}>
          <div className="banner2_card">
            <img src={a1} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a2} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a4} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a1} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a1} alt="first" />
          </div>
        </Slider>
      </div>
      <div className="banner2_main">
        <Slider {...settings3}>
          <div className="banner2_card">
            <img src={a1} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a2} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a4} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a2} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a3} alt="first" />
          </div>
          <div className="banner2_card">
            <img src={a4} alt="first" />
          </div>
        </Slider>
      </div>
     </div>
     <div className="banner2_text">
         <h1>Contact us</h1>
         <p>Home <span>Contact us</span> </p>
     </div>
     </div>
    </>
  );
};

export default Banner2;
