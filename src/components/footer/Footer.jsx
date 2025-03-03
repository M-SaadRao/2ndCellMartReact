import React from "react";
import footerlogo from "../../../public/images/logo/celllogo.png";
import Container from "../container/Container";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center py-5">
          {/* Logo and Description */}
          <div>
            <div className="w-[140px]">
              <img src={footerlogo} alt="Footer Logo" />
            </div>
            <div className="text-white mt-3">
              <p>
                Here you will get best conditioned refurbished <br /> iPhones
                and used Androids.
              </p>
            </div>
            <div className="flex space-x-4 mt-4 text-white">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} className="hover:text-red-600" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} className="hover:text-red-600" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} className="hover:text-red-600" />
              </a>
            </div>
          </div>

          {/* +++++++++++++++++ Navigation Links ++++++++++++++++++++++++ */}
          <div className="flex flex-col sm:items-center">
            <h1 className="text-3xl text-white mt-3 ">Pages</h1>
            <div className="flex flex-col mt-5 leading-6 text-white fw-semibold space-y-2">
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to="/"
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to="/product"
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  Product
                </Link>
              </div>
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to="/accessories"
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  Accessories
                </Link>
              </div>
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to="/about"
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          {/* +++++++++++++++ address ++++++++++++++++++++++++ */}

          <div>
            <h1 className="text-3xl text-white mt-3">Store Info</h1>
            <div className="flex flex-col mt-5 leading-6 text-white fw-semibold space-y-2">
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to=""
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  8067 120th Street, Unit 110, Delta, BC V4C 6P7.
                </Link>
              </div>
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to=""
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  Phone: 778 957 8000
                </Link>
              </div>
              <div className="flex items-center">
                <span>-</span>
                <Link
                  to=""
                  className="ml-2 hover:text-red-600 transform transition-transform duration-500 hover:translate-x-3"
                >
                  Email: info@2ndCellMart.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-red-600 text-center text-white py-2 text-lg">
        © Logicracks.uk reserved all rights{" "}
      </div>
    </div>
  );
}

export default Footer;
