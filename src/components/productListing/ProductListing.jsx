import { useNavigate } from "react-router-dom";
import productData from "../../utils/productsData";
import Container from "../container/Container";
import ProductCards from "../productCards/ProductCards";

function ProductListing() {
  const navigate = useNavigate();

  return (
    <Container>
      {/* <div className="text-center text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-9">
        #Products
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-6 md:gap-x-5 md:gap-y-8 lg:gap-10">
        {productData.map((item) => (
          <div key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <ProductCards product={item} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductListing;
