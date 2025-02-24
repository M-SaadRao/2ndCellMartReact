import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import ProductCards from "../productCards/ProductCards";
import { useSelector } from "react-redux";

function TopChoice() {
  const navigate = useNavigate();
  const products = useSelector(state=>state.products.products);
  return (
    <div>
      <Container>
        <div>
          <div className="text-center text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-9">
            #Top Choice
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-6 md:gap-x-5 md:gap-y-8 lg:gap-10">
          {products?.filter((prod) => prod.categoryid === '1').slice(0, 8).map( (item) => (
          <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <ProductCards product={item} />
          </div>
        ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopChoice;
