import React from "react";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline, IoSearchSharp } from "react-icons/io5";

const MiddleNav = () => {
  return (
    <div className="bg-white flex items-center space-y-2 flex-col md:flex-row md:justify-between py-3 px-8 m-2">
      <div className="flex justify-start items-center border-2 rounded-full py-2 px-4 w-1/3">
        <div className="w-full flex">
          <input
            className="w-full text-sm font-normal text-[#898989] border-none outline-none bg-transparent"
            type="text"
            placeholder="Hey, what are you looking for?"
          />
          <IoSearchSharp className="text-2xl flex justify-end" />
        </div>
      </div>
      <div className="flex justify-center items-center text-sm font-normal text-white gap-[10px] w-1/3">
        <img src="/images/Vector.jpg" alt="vector" />
        <img src="/images/main-logo.jpg" alt="vector" />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-4 md:gap-6 w-full md:w-1/3 ">
        <div className="flex items-center gap-[10px]">
          <FiUser className="text-2xl" />
          <p className="text-sm font-450">My Account</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <IoMdHeartEmpty className="text-2xl" />
          <p className="text-sm font-450">Wishlist</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <IoBagOutline className="text-2xl" />
          <p className="text-sm font-450 underline">2 items</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
