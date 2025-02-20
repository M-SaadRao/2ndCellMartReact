import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import accessoryData from '../../utils/AccessoriesData'
import AccessoriesCards from "../accessoriesCards/AccessoriesCards";

function AccessoriesListing() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        {/* <div className="text-center text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-9">
          #Accessories
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-6 md:gap-x-5 md:gap-y-8 lg:gap-10">
        {accessoryData.map((item) => (
            <div key={item.id} onClick={() => navigate(`/accessory/${item.id}`)}>
                <AccessoriesCards accessories={item}/>
            </div>
        ))}
        </div>
      </Container>
    </div>
  );
}

export default AccessoriesListing;
