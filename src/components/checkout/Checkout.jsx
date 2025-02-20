import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import productData from "../../utils/productsData";

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
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Details:", shippingInfo, cartItems);
    dispatch(clearCart());
    navigate("/order-confirmation");
  };
  useEffect(() => console.log(cartItems), [cartItems]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
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
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          {/* <p className="font-bold mt-2">Total: ${totalPrice.toFixed(2)}</p> */}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
