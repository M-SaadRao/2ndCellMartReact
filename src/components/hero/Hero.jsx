import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import slider1 from "../../../public/images/slider-images/slider-img-1.webp";
import slider2 from "../../../public/images/slider-images/slider-img-2.webp";
import slider3 from "../../../public/images/slider-images/slider-img-3.webp";
import slider4 from "../../../public/images/slider-images/slider-img-4.webp";

const slides = [
  { image: slider1, title: "USED AND REFURBISHED", subtitle: "iPhone" },
  { image: slider2, title: "GET BEST CONDITIONED", subtitle: "Samsung" },
  { image: slider3, title: "GET EXPENSIVE LOOKING", subtitle: "Google Pixel" },
  { image: slider4, title: "GET MOTO IN LESSER-PRICE", subtitle: "Motorola" },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 my-8">
            <div>
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[90%] sm:w-[80%] max-sm:mx-auto"
              />
            </div>
            <div className="text-gray-800 text-center sm:text-left">
              <h2 className="heading-1">{slide.title}</h2>
              <p className="heading-2">{slide.subtitle}</p>
              <Link to="/product">
                <button className="mt-5 bg-red-600 text-xl font-semibold text-white px-3 py-2 sm:px-5 sm:py-3 uppercase rounded-2xl hover:bg-gray-800">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Hero;
