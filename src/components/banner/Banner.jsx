import React from "react";
import MainPageLayout from "../../layouts/layouts/MainPageLayout";

const Banner = () => {
  return (
    <MainPageLayout>
      <div
        className="relative w-full h-64 bg-[#FCD0CC] bg-no-repeat flex items-center px-10 mt-8"
        style={{
          backgroundImage: "url('/images/banner/bannerbg.png')",
          backgroundPosition: "center right",
        }}
      >
        {/* Left Content */}
        <div className="text-left ps-8">
          <h1 className="text-5xl text-black font-750 uppercase">UP TO 80% OFF.</h1>
          <button className="text-sm font-70 text-white bg-[#4D2952] py-3 px-12 mt-6">
            SEARCH FOR BRAND
          </button>
        </div>

        {/* Right Badge */}
        <div className="absolute text-lg font-bold right-[18rem] top-20 h-28 w-28 bg-black text-white p-4 rounded-full text-center">
          Trusted <br /> <span className="font-medium text-[#FFC5BF]"> SINCE 1997</span>
        </div>
        <img
          className="absolute bottom-0 left-20"
          src="/images/Banner/banner1.png"
          alt="img"
        />
        <img
          className="absolute bottom-0 right-80 bg-transparent"
          src="/images/Banner/banner2.png"
          alt="img"
        />
        <img
          className="absolute bottom-0 right-0 bg-transparent"
          src="./images/banner/banner3.png"
          alt="img"
        />
      </div>
    </MainPageLayout>
  );
};

export default Banner;
