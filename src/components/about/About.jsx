import React from "react";
import Container from "../../components/container/Container";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <Container>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600">
          About Us
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Your destination for the best refurbished iPhones & used Androids.
        </p>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Left - About Text */}
          <div className="space-y-5 text-gray-700 text-lg">
            <p>
              At <strong className="text-red-600">2nd Cell Mart</strong>, we provide high-quality, 
              fully tested, and best-conditioned refurbished iPhones 
              and used Android smartphones. Our goal is to make premium 
              smartphones accessible at affordable prices.
            </p>
            <p>
              We believe in quality, affordability, and excellent customer service.
              Whether you are looking for an iPhone or an Android, we've got the 
              best deals for you.
            </p>
          </div>

          {/* Right - Store Information */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Store Info</h2>
            <div className="mt-4 space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600 text-lg" />
                8067 120th Street, Unit 110, Delta, BC V4C 6P7
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600 text-lg" />
                <a href="tel:7789578000" className="hover:text-red-600">
                  778 957 8000
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-red-600 text-lg" />
                <a href="mailto:info@2ndCellMart.com" className="hover:text-red-600">
                  info@2ndCellMart.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
