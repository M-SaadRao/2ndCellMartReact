import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "../../../public/images/logo/celllogo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[120px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/product" className="hover:text-red-600">Product</Link>
          <Link to="/accessories" className="hover:text-red-600">Accessories</Link>
          <Link to="/about" className="hover:text-red-600">About</Link>
          
          {/* Cart Link with Quantity Badge */}
          <Link to="/cart" className="hover:text-red-600 flex items-center relative">
            <ShoppingCart className="w-5 h-5 text-red-600" />
            {cartItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="z-10 md:hidden fixed right-0 w-[40%] bg-gray-700 text-white space-y-4 p-4">
          <Link to="/" className="block hover:text-blue-400" onClick={toggleMenu}>Home</Link>
          <Link to="/product" className="block hover:text-blue-400" onClick={toggleMenu}>Product</Link>
          <Link to="/about" className="block hover:text-blue-400" onClick={toggleMenu}>About</Link>
          <Link to="/cart" className="hover:text-blue-400 flex items-center" onClick={toggleMenu}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Cart
            {cartItems?.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
