import React from "react";

const TopNav = () => {
  return (
    <div className="bg-[#4D2952] flex items-center space-y-2 flex-col md:flex-row md:justify-between py-3 px-12">
      <div className="flex gap-6 justify-start items-center">
        <select
          className="bg-[#4D2952] text-sm font-normal text-white"
          name=""
          id=""
        >
          <option className="" value="usd">
            USD
          </option>
        </select>
        <select
          className="bg-[#4D2952] text-sm font-normal text-white"
          name=""
          id=""
        >
          <option className="" value="english">
            English
          </option>
        </select>
      </div>
      <p className="flex justify-center items-center text-sm font-normal text-white">
        🔥 Only 11 days left until VALENTINE'S DAY! 🔥
      </p>
      <div className="flex justify-end items-center gap-6">
        <p className="text-sm font-normal text-white">Help & Information</p>
        <p className="text-sm font-normal text-white">Contact with us</p>
      </div>
    </div>
  );
};

export default TopNav;
