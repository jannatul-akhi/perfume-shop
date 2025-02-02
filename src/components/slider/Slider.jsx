import React from "react";
import MainPageLayout from "../../layouts/layouts/MainPageLayout";
import { FaCircle, FaRegCircle } from "react-icons/fa6";

const Slider = () => {
  return (
    <MainPageLayout>
      <div
        className="w-full bg-cover bg-center relative mt-6"
        style={{ backgroundImage: "url('/images/Hero/sliderbg.png')" }}
      >
        <div className="flex justify-between items-center relative">
          <div className="flex flex-col items-center justify-center w-full space-y-4">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-sm font-normal text-black mb-2">
                Find the perfect gift in our
              </p>
              <h1 className="text-6xl font-normal text-center uppercase text-black">
                Variety <br /> Gift Sets
              </h1>
              <button className="px-6 py-2 text-sm font-750 text-white bg-[#BE5B75] mt-6">
                Shop Now
              </button>
              <img
                className="absolute top-0 left-0"
                src="/images/Hero/giftbox.png"
                alt="img"
              />
            </div>
          </div>
          <img
            className="absolute bottom-10 right-[45rem]"
            src="/images/Hero/love4.png"
            alt="img"
          />
          <img
            className="absolute bottom-60 right-[40rem]"
            src="/images/Hero/love5.png"
            alt="img"
          />
          <div className="w-full flex justify-end">
            <img src="/images/Hero/sliderLeft.png" alt="img" />
          </div>
        </div>
        <img
          className="absolute top-10 left-0"
          src="/images/Hero/love1.png"
          alt="img"
        />
        <img
          className="absolute bottom-10 left-0"
          src="/images/Hero/love2.png"
          alt="img"
        />
        <img
          className="absolute bottom-20 left-20"
          src="/images/Hero/love3.png"
          alt="img"
        />
      </div>
      <div className="flex gap-6 justify-center my-6">
        <FaCircle className="text-[#4D2952] text-[8px]"></FaCircle>
        <FaCircle className="text-[#C4C4C4] text-[8px]"></FaCircle>
        <FaCircle className="text-[#C4C4C4] text-[8px]"></FaCircle>
      </div>
    </MainPageLayout>
  );
};

export default Slider;
