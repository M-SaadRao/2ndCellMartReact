import { useNavigate } from "react-router-dom";

import Container from "../container/Container";
import ProductCards from "../productCards/ProductCards";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

function ProductListing({categoryId}) {
  const navigate = useNavigate();

  const products = useSelector(state=>state.products.products);
  const [query, setQuery] = useState("");
  const [filterProducts, setFilterProducts] = useState(products);

  const handleFilter = useCallback(()=>{
    if (query){
      // us product ko nikalo jin ka naam match ho query say jo user input field main daly ga
      setFilterProducts(products.filter((prod)=>prod.name.toLowerCase().includes(query.toLowerCase())));
    }else{
      setFilterProducts(products);
    }
  }, [query]);

  useEffect(()=>{
    handleFilter();
  },[handleFilter])




  return (
    <Container>

      <input 
      className="border-2 border-black"
      type="text"
      value={query}
      placeholder="Search product by name"
      onChange={(e)=> setQuery(e.target.value)} />
      {/* <div className="text-center text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-9">
        #Products
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-6 md:gap-x-5 md:gap-y-8 lg:gap-10">
        {filterProducts.length > 0 ? filterProducts?.filter((prod) => prod.categoryid === categoryId).map((item) => (
          <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <ProductCards product={item} />
          </div>
        )): <h1>Products not found</h1>}
      </div>
    </Container>
  );
}

export default ProductListing;
