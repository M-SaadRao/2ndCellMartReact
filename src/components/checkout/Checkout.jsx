import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    contactNumber: "",
    address: "",
    city: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const handleInputChange = (e) => {
    // extracting name and value from target by destructuring
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(clearCart());
    navigate("/order-confirmation");
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-3xl text-red-600 font-bold mb-6 text-center">Checkout</h2>
      <div className="flex justify-center gap-[30px]">

        <div className="max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              required
              value={shippingInfo.contactNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={shippingInfo.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Order Summary</h3>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-2 border-b"
              >
                <img
                  src={item.imgPath}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-red-600">${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <p className="font-bold mt-2 text-lg">
            Total Price:{" "}
            <span className="text-red-600">
              $
              {cartItems
                .reduce(
                  (total, item) => total + item.price * (item.quantity || 1),
                  0
                )
                .toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
