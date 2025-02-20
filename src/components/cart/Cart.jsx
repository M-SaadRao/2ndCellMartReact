import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

const Cart = () => {
  const navigate = useNavigate(); // Initialize navigation

  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  return (
    <Container>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is Empty</p>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white p-2 mt-3 rounded text-end"
              >
                Clear Cart
              </button>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border p-2 flex justify-between md:pr-5 items-center mb-3"
              >
                <img
                  src={item.imgPath}
                  alt="product Img"
                  className="w-[100px] sm:w-[150px]"
                />

                <div className="w-[200px] sm:w-[300px] flex flex-col items-start text-left">
                  <h3 className="text-[12px] sm:text-[15px] md:text-[20px] lg:text-[25px] font-bold">
                    {item.name}
                  </h3>
                  <p className="text-[10px] sm:text-[13px] md:text-[18px] text-red-600 font-bold">
                    ${item.price}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="text-red-600 text-[10px] sm:text-[13px] md:text-[18px] font-extralight"
                  >
                    Remove
                  </button>
                </div>

                {/* ************** counter *************** */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
                  <div className="flex items-center border border-gray-400 rounded-lg">
                    <button
                      className="px-1 py-1 sm:px-3 sm:py-2 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                      onClick={() => dispatch(decreaseQuantity(item))}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="px-1 py-1 sm:px-3 sm:py-2 bg-gray-200 hover:bg-gray-400 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-3">
              <h3 className="font-bold">Total Items: {cartItems?.length}</h3>
              <h3 className="font-bold ">
                Total Price: <span className="text-red-600">${totalPrice}</span>{" "}
              </h3>

              <div className="flex flex-col w-[150px]">
                <button
                  className="bg-green-600 text-white p-2 mt-3 rounded"
                  onClick={() => navigate("/checkout")} // Navigate to CheckoutPage
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Cart;
