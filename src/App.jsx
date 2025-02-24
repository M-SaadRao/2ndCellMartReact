import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Accessories from "./pages/accessories/Accessories";
import CartPage from "./pages/cartPage/CartPage";
import AccessoryDetails from "./pages/accessoryDetails/AccessoryDetails";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "./redux/productSlice";
import Product from "./pages/product/Product";

function ScrollMemory() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // Detect if user is navigating forward or backward

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(`scroll-${pathname}`);
    if (savedPosition && navigationType === "POP") {
      window.scrollTo(0, parseInt(savedPosition, 10));
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navigationType]);

  return null;

}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/get.php`, {
          key: "thisismykey123@88",
          table: "tblproducts",
        });

        
        if (response.data.success) {
           dispatch(setProducts(response.data.data));
        } else {
          console.error("API Error:", response.data.message);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
    
      <ScrollMemory /> {/* Ensures scroll position is preserved */}
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="" index />
          <Route element={<AboutPage />} path="about" />
          <Route element={<Product />} path="product" />
          <Route element={<ProductDetails />} path="product/:id" />
          <Route element={<Accessories />} path="accessories" />
          <Route element={<AccessoryDetails />} path="accessory/:id" />
          <Route element={<CartPage />} path="cart" />
          
          <Route element={<CheckoutPage />} path="/checkout"  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
