import React from "react";
import MainPageLayout from "../../layouts/layouts/MainPageLayout";

const ProductCategories = () => {
  return (
    <MainPageLayout>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-[250px] mt-6 relative">
          <img
            className="w-full h-full"
            src="/images/products/perfume1.png"
            alt="img"
          />
          <div className="absolute inset-0 bg-gray-400 opacity-70 hover:opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-black font-bold">
            <p className="text-lg text-white">Womens Perfume</p>
            <p className="text-sm mt-2 underline text-white">Shop Now</p>
          </div>
        </div>
        <div className="h-[250px]  mt-6 relative">
          <img
            className="w-full h-full"
            src="/images/products/perfume2.png"
            alt="img"
          />
          <div className="absolute inset-0 bg-gray-400 opacity-70 hover:opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-black font-bold">
            <p className="text-lg text-white">Mens's Cologne</p>
            <p className="text-sm mt-2 underline text-white">Shop Now</p>
          </div>
        </div>
        <div className="h-[250px] mt-6 relative">
          <img
            className="w-full h-full"
            src="/images/products/perfume3.png"
            alt="img"
          />
          <div className="absolute inset-0 bg-gray-400 opacity-70 hover:opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-black font-bold">
            <p className="text-lg text-white">Hair Care</p>
            <p className="text-sm mt-2 underline text-white">Shop Now</p>
          </div>
        </div>
        <div className="h-[250px] mt-6 relative">
          <img
            className="w-full h-full"
            src="/images/products/perfume4.png"
            alt="img"
          />
          <div className="absolute inset-0 bg-gray-400 opacity-70 hover:opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-black font-bold">
            <p className="text-lg text-white">Skin Care</p>
            <p className="text-sm mt-2 underline text-white">Shop Now</p>
          </div>
        </div>
        <div className="h-[250px] mt-6 relative">
          <img
            className="w-full h-full"
            src="/images/products/perfume5.png"
            alt="img"
          />
          <div className="absolute inset-0 bg-gray-400 opacity-70 hover:opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-black font-bold">
            <p className="text-lg text-white">Gift Sets</p>
            <p className="text-sm mt-2 underline text-white">Shop Now</p>
          </div>
        </div>
        <div className="h-[250px] mt-6 relative">
          <img
            className="w-full h-full"
            src="/images/products/perfume6.png"
            alt="img"
          />
          <div className="absolute inset-0 bg-gray-400 opacity-70 hover:opacity-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-black font-bold">
            <p className="text-lg text-white">Best Sellers</p>
            <p className="text-sm mt-2 underline text-white">Shop Now</p>
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default ProductCategories;
