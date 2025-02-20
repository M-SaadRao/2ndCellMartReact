import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-sm rounded-xl px-1 sm:px-4 py-2 sm:py-8 border border-gray-300 flex flex-col items-center min-h-full justify-between cursor-pointer">
      {/* Product Image */}
      <img
        src={product.imgPath}
        alt={product.name}
        className="w-[90%] object-cover rounded-lg"
      />

      {/* Product Details */}
      <div className="text-center mt-3">
        <p className="text-sm sm:text-lg font-semibold">
          {product.name} <span className="text-gray-500"><br />({product.color})</span>
        </p>
        <p className="text-red-600 font-semibold text-lg">${product.price}</p>
      </div>

      {/* Shop Now Button - Positioned at the Bottom */}
      <div className="mt-auto pb-4">
        <button className="bg-black text-white font-medium px-4 py-2 mt-6 rounded-lg hover:bg-gray-900 transition cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
