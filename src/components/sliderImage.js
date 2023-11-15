import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick-theme.css";

const SliderImage = (props) => {
  const images = [props.image, props.image2, props.image3];
  const CustomPrevArrow = (props) => (
    <div
      {...props}
      className="custom-arrow custom-prev"
      style={{
        ...props.style,
        left: "-20px",
        color: "rgb(0 0 0 / 39%)",
        fontSize: "28px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      className="custom-arrow custom-next"
      style={{
        ...props.style,
        right: "-20px",
        color: "rgb(0 0 0 / 39%)",
        fontSize: "28px",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <FontAwesomeIcon icon="fa-solid fa-circle-chevron-right" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      style={{
        width: "65%",
        borderRadius: "20px",
        marginRight: "1%",
        height: "100%",
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ borderRadius: "20px" }}>
            <img
              src={image}
              alt={`slide-${index}`}
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImage;
