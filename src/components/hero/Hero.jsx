import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { Link } from "react-router-dom";
import Container from "../container/Container";
import slider1 from "../../../public/images/slider-images/slider-img-1.webp";
import slider2 from "../../../public/images/slider-images/slider-img-2.webp";
import slider3 from "../../../public/images/slider-images/slider-img-3.webp";
import slider4 from "../../../public/images/slider-images/slider-img-4.webp";

function Hero() {
  // Settings for the slick slider
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Speed of the slide transition
    slidesToShow: 1, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll per navigation
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Auto play speed (3 seconds)
  };

  return (
    <Container>
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <img
              src={slider1}
              alt="Slide 1"
              className="w-[90%] sm:w-[80%] max-sm:mx-auto"
            />
          </div>
          <div className="text-gray-800 text-center sm:text-left">
            <h2 className="heading-1">USED AND REFURBISHED</h2>
            <p className="heading-2">iPhone</p>

            <Link to="/product">
              <button className="mt-5 bg-red-600 text-xl font-semibold text-white px-5 py-3 uppercase rounded-2xl hover:bg-gray-800">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <img
              src={slider2}
              alt="Slide 2"
              className="w-[90%] sm:w-[80%] max-sm:mx-auto"
            />
          </div>
          <div className="text-gray-800 text-center sm:text-left">
            <h2 className="heading-1">GET BEST CONDITIONED</h2>
            <p className="heading-2">Samsung</p>
            <Link to="/product">
              <button className="mt-5 bg-red-600 text-xl font-semibold text-white px-5 py-3 uppercase rounded-2xl hover:bg-gray-800">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <img
              src={slider3}
              alt="Slide 3"
              className="w-[90%] sm:w-[80%] max-sm:mx-auto"
            />
          </div>
          <div className="text-gray-800 text-center sm:text-left">
            <h2 className="heading-1">GET EXPENSIVE LOOKING</h2>
            <p className="heading-2">Google Pixel</p>
            <Link to="/product">
              <button className="mt-5 bg-red-600 text-xl font-semibold text-white px-5 py-3 uppercase rounded-2xl hover:bg-gray-800">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
          <div>
            <img
              src={slider4}
              alt="Slide 4"
              className="w-[90%] sm:w-[80%] max-sm:mx-auto"
            />
          </div>
          <div className="text-gray-800 text-center sm:text-left">
            <h2 className="heading-1">GET MOTO IN LESSER-PRICE</h2>
            <p className="heading-2">Motorola</p>
            <Link to="/product">
              <button className="mt-5 bg-red-600 text-xl font-semibold text-white px-5 py-3 uppercase rounded-2xl hover:bg-gray-800">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </Container>
  );
}

export default Hero;
