import React from "react";
import { BiMessageRounded } from "react-icons/bi";

const ShopAll = () => {
  return (
    <div className="flex w-full">
      <div className="flex justify-start w-1/3"></div>
      <div className="flex flex-col justify-center w-1/3 space-y-4 text-center py-10">
        <h1 className="uppercase text-3xl font-750 text-black">
          Shop Our Collection
        </h1>
        <p className="text-[15px] font-normal text-black ">
          Our delicious, limited-edition collection
        </p>
        <button className="uppercase text-sm font-750 border-[#898989] border-[2px] text-black py-3 px-10 mt-2">
          Shop All
        </button>
      </div>
      <div className="flex justify-end w-1/3  ">
        <button className="flex gap-2 items-center uppercase text-sm font-extrabold text-white bg-[#4D2952] px-6 h-12 me-[40px] rounded-full">
          <BiMessageRounded className="text-2xl"></BiMessageRounded>
          Live Help
        </button>
      </div>
    </div>
  );
};

export default ShopAll;
