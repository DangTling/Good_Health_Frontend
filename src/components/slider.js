import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1610x492_045056e670_7f9f4b3c59.png",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1610x492_banner_desktop_1_b814a9eaea.png",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/20231024_OKAMOTO_Banner_Web_PC_805x246_afb1316fae.jpg",
  "https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/1610x492_acc5c5c31e.jpg",
];

const compSlider = () => {
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

export default compSlider;
