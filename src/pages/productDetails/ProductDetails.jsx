import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../../redux/cartSlice";
import Container from "../../components/container/Container";
import { notification } from "antd";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const[product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [api, contextHolder] = notification.useNotification();
  const products = useSelector(state=>state.products.products);
  
  useEffect(()=>{
    if(products && products.length > 0){
      const prod = products.find((p) => parseInt(p.id) === parseInt(id));
      setProduct(prod);

    }
  },[products]);

  if (!product) {
    return (
      <div className="text-center text-red-600 text-lg sm:text-xl">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity}));
    api.success({message: "Success", description: "Product added to cart successfully", duration: "0.7"})
  };

  return (
    <Container>
      {contextHolder}
      <div className="max-w-6xl mx-auto p-3 sm:p-6 bg-white rounded-lg">
        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Product Image - Adjusted for Small Screens */}
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <img
              src={product.imgPath}
              alt={product.name}
              className="w-full sm:w-[70%] md:w-full max-w-[350px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Product Info - Adjusted for Small Screens */}
          <div className="col-span-12 md:col-span-7 text text-left space-y-3">
            <h2 className="text-xl sm:text-3xl font-bold">{product.name}</h2>
            <p className="text-gray-500 text-sm sm:text-base">{product.color}</p>
            <p className="text-red-600 text-lg sm:text-2xl font-semibold">
              ${product.price}
            </p>

            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <p className="text-gray-700">
                <strong>Weight:</strong> {product.weight}
              </p>
              <p className="text-gray-700">
                <strong>Dimensions:</strong> {product.dimensions}
              </p>
              <p className="text-gray-700">
                <strong>Materials:</strong> {product.materials}
              </p>
            </div>

            {/* Quantity Counter and Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4">
              {/* Quantity Counter - Adjusted for Small Screens */}
              <div className="flex items-center border border-gray-400 rounded-lg">
                <button
                  className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className="px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg">
                  {quantity}
                </span>
                <button
                  className="px-2 py-1 sm:px-3 sm:py-2 bg-gray-200 hover:bg-gray-400 rounded-r-lg"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button - Adjusted for Small Screens */}
              <button 
              onClick={handleAddToCart}
              className="bg-black text-white px-2 sm:px-6 py-2 rounded-lg hover:bg-gray-900 transition text-sm sm:text-base cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-8 border-t pt-4">
          <h3 className="text-lg sm:text-2xl font-semibold mb-3 text-red-600">
            Product Description
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">{product.description}</p>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails;
