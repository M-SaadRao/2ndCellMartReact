import React from "react";
import Container from "../container/Container";
import delivery from "../../../public/images/icon/delivery.png";
import warrenty from "../../../public/images/icon/warrenty.png";
import pickup from "../../../public/images/icon/pickup.png";

function Cards() {
  return (
    <div className="bg-gray-100 mt-5">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 border-[1px] p-4 rounded-xl">
            <div className="bg-red-500 p-4 rounded-full">
              <img src={delivery} alt="Delivery" />
            </div>
            <div className="text-black font-semibold text-xl">
              Shipping to home all over Canada.
            </div>
          </div>

          <div className="flex items-center gap-4 border-[1px] p-4 rounded-xl">
            <div className="bg-red-500 p-4 rounded-full">
              <img src={warrenty} alt="warrenty" />
            </div>
            <div className="text-black font-semibold text-xl">
              7 Days checking warrenty.
            </div>
          </div>

          <div className="flex items-center gap-4 border-[1px] p-4 rounded-xl">
            <div className="bg-red-500 p-4 rounded-full">
              <img src={pickup} alt="pickUp" />
            </div>
            <div className="text-black font-semibold text-xl">
              Pickup available across Canada.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Cards;
