import React from "react";
import MainPageLayout from "../../layouts/layouts/MainPageLayout";

const Certificate = () => {
  return (
    <MainPageLayout>
      <div className="mt-8">
        <div className="flex justify-between bg-[#FCF1F5] w-full">
          <div className=" flex flex-col p-16 w-[45%]">
            <h1 className="text-[34xl] font-750 text-black uppercase">
              Gift Certificates
            </h1>
            <button className="text-sm font-750 text-black uppercase py-3 mt-4 border-2 border-[#383838]">
              get a gift certificate
            </button>
          </div>
          <div>
            <img src="/images/certificate/image1.jpg" alt="" />
          </div>
        </div>

        {/* Bottom Part  */}
        <div className="flex w-full gap-4 mt-6">
          {/* left  */}
          <div
            className="bg-[#F5F6F6] flex w-1/2"
            style={{
              backgroundImage: "url('/images/certificate/bg.jpg')",
            }}
          >
            <div className=" pt-12 ps-12">
              <p className="text-[16px]  text-black font-normal uppercase">
                JOIN OUR
              </p>
              <h1 className="text-[34px] text-black font-extrabold uppercase">
                Subscription club
              </h1>
              <p className="text-sm font-light text-black italic">
                as low as $9.95/month
              </p>
              <button className="text-sm font-750 text-white bg-[#BE5B75] uppercase py-3 px-6 mt-3">
                Learn more
              </button>
            </div>
            <div
              className="relative w-full bg-cover bg-[#F5F6F6] bg-center flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/certificate/bg-2.jpg')",
              }}
            >
              {/* Foreground Image */}
              <img
                src="/images/certificate/image2.jpg"
                alt="Certificate"
                className="w-18 absolute object-contain rounded-lg shadow-xl -mb-16"
              />
            </div>
          </div>

          {/* Right  */}
          <div
            className="bg-[#F5F6F6] flex w-1/2"
            style={{
              backgroundImage: "url('/images/certificate/bg.jpg')",
            }}
          >
            <div className=" pt-12 ps-12">
              <h1 className="text-[34px] text-black font-extrabold uppercase">
                Win a $250 Spopping spree
              </h1>
              <p className="text-[16px]  text-black font-normal uppercase">
                MONTHLY GIVEWAY
              </p>
              <button className="text-sm font-750 text-white bg-[#4D2952] uppercase py-3 px-6 my-3">
                Learn more
              </button>
            </div>
            <div className="relative w-full h-full bg-cover bg-[#F5F6F6] bg-center flex items-center justify-center">
              {/* Foreground Image */}
              <img
                src="/images/certificate/image3.jpg"
                alt="Certificate"
                className="h-full absolute top-0 right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export default Certificate;
