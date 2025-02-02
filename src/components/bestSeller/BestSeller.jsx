import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import MainPageLayout from "../../layouts/layouts/MainPageLayout";

const BestSeller = () => {
  return (
    <MainPageLayout>
      <div>
        <h1 className="text-3xl font-750 text-black uppercase text-center mt-16 mb-8">
          best sellers
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {/* card-1  */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between">
              <h2 className="text-[10px] font-900 text-white mb-4 bg-[#4D2952] p-2">
                WOMEN
              </h2>
              <FaRegHeart className="text-xl text-[#C4C4C4]"></FaRegHeart>
            </div>

            <div className="flex overflow-x-auto space-x-4">
              <div className="w-64 bg-white rounded-lg ">
                <div className="relative">
                  <img
                    src="/images/BestSell/1.png"
                    alt=""
                    className="w-full h-48 object-cover rounded-t-lg my-8"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-750 text-black">
                    Jo Malone Vetiver & Go...
                  </h3>
                  <p className="text-[#898989] text-[13px] font-light">
                    by <span className="underline">Ipsa</span>
                  </p>
                  <p className="text-black text-[13px] font-light mt-2">
                    Luminizing Clay <br /> from{" "}
                    <span className="text-lg font-semibold">$51.74</span>
                  </p>
                  <button className="text-gray-800 font-bold py-2 px-4 uppercase border-2 rounded mt-4 w-full">
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card-2  */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between">
              <h2 className="text-[10px] font-900 text-white mb-4 bg-[#4D2952] p-2">
                WOMEN
              </h2>
              <FaRegHeart className="text-xl text-[#C4C4C4]"></FaRegHeart>
            </div>

            <div className="flex overflow-x-auto space-x-4">
              <div className="w-64 bg-white rounded-lg ">
                <div className="relative">
                  <img
                    src="/images/BestSell/2.png"
                    alt=""
                    className="w-full h-48 object-cover rounded-t-lg my-8"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-750 text-black">
                    Jo Malone Vetiver & Go...
                  </h3>
                  <p className="text-[#898989] text-[13px] font-light">
                    by <span className="underline">Ipsa</span>
                  </p>
                  <p className="text-black text-[13px] font-light mt-2">
                    Luminizing Clay <br /> from{" "}
                    <span className="text-lg font-semibold">$51.74</span>
                  </p>
                  <button className="text-gray-800 font-bold py-2 px-4 uppercase border-2 rounded mt-4 w-full">
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card-3  */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between">
              <h2 className="text-[10px] font-900 text-white mb-4 bg-[#4D2952] p-2">
                WOMEN
              </h2>
              <FaRegHeart className="text-xl text-[#C4C4C4]"></FaRegHeart>
            </div>

            <div className="flex overflow-x-auto space-x-4">
              <div className="w-64 bg-white rounded-lg ">
                <div className="relative">
                  <img
                    src="/images/BestSell/3.png"
                    alt=""
                    className="w-full h-48 object-cover rounded-t-lg my-8"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-750 text-black">
                    Jo Malone Vetiver & Go...
                  </h3>
                  <p className="text-[#898989] text-[13px] font-light">
                    by <span className="underline">Ipsa</span>
                  </p>
                  <p className="text-black text-[13px] font-light mt-2">
                    Luminizing Clay <br /> from{" "}
                    <span className="text-lg font-semibold">$51.74</span>
                  </p>
                  <button className="text-gray-800 font-bold py-2 px-4 uppercase border-2 rounded mt-4 w-full">
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card-4  */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between">
              <h2 className="text-[10px] font-900 text-white mb-4 bg-[#4D2952] p-2">
                WOMEN
              </h2>
              <FaRegHeart className="text-xl text-[#C4C4C4]"></FaRegHeart>
            </div>

            <div className="flex overflow-x-auto space-x-4">
              <div className="w-64 bg-white rounded-lg ">
                <div className="relative">
                  <img
                    src="/images/BestSell/4.png"
                    alt=""
                    className="w-full h-48 object-cover rounded-t-lg my-8"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-750 text-black">
                    Jo Malone Vetiver & Go...
                  </h3>
                  <p className="text-[#898989] text-[13px] font-light">
                    by <span className="underline">Ipsa</span>
                  </p>
                  <p className="text-black text-[13px] font-light mt-2">
                    Luminizing Clay <br /> from{" "}
                    <span className="text-lg font-semibold">$51.74</span>
                  </p>
                  <button className="text-gray-800 font-bold py-2 px-4 uppercase border-2 rounded mt-4 w-full">
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default BestSeller;
