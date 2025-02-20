import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import google from '../../../public/images/brands-logo/google-pixel.jpg';
import iphone from '../../../public/images/brands-logo/iphone.png';
import moto from '../../../public/images/brands-logo/motorola.png';

import samsung from '../../../public/images/brands-logo/samsung.png';
import Container from '../container/Container';

const brands = [
  { img: moto, alt: 'Motorola' },
  { img: samsung, alt: 'Samsung' },
  { img: google, alt: 'Google Pixel' },
  { img: iphone, alt: 'iPhone' },
  { img: moto, alt: 'Motorola' },
  { img: samsung, alt: 'Samsung' },
  { img: google, alt: 'Google Pixel' },
  { img: iphone, alt: 'iPhone' }
];

function BrandsSlider() {
  return (
    <Container>
    <div className="border-t border-gray-200 py-10">
      <div className="container mx-auto ">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 }
          }}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000} // Added smooth transition speed
          loop={true}
          modules={[Autoplay]}
          className="swiper-container"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center h-32 transition-transform duration-1000 ease-in-out">
              <a href="#">
                <img
                  src={brand.img}
                  alt={brand.alt}
                  className="grayscale transition-opacity duration-500 opacity-50 hover:opacity-100 hover:grayscale-0 max-h-40"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </Container>
  );
}

export default BrandsSlider;
