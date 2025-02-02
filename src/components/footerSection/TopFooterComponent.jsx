import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const TopFooterComponent = () => {
  return (
    <>
      <div className="bg-[#4D2952] text-white py-3 px-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <i className="fas fa-box"></i> Free Delivery & Returns*
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-tools"></i> Online Self-Service
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-check-circle"></i> 100% Genuine Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-lock"></i> Secure Payment
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-shopping-cart"></i> 100% Authentic Products
          </div>
        </div>
      </div>
      <footer className="pt-10 text-black bg-[#F5F6F6]">
        {/* Top Section - Sign Up */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 border-b border-gray-300 pb-6">
            {/* Sign Up Section */}
            <div>
              <h3 className="font-bold text-lg uppercase">
                Sign Up for Special Offers and Promotions
              </h3>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border-b border-black bg-transparent outline-none px-2 py-2 w-full md:w-auto"
                />
                <input
                  type="text"
                  placeholder="Your Mobile"
                  className="border-b border-black bg-transparent outline-none px-2 py-2 w-full md:w-auto"
                />
                <button className=" border-2 border-[#383838] text-black px-6 py-2 font-semibold uppercase">
                  Sign Up
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By entering your email and clicking "subscribe", you consent to
                receive marketing emails. You can unsubscribe at any time. See
                our{" "}
                <a href="/" className="underline">
                  Privacy Notice
                </a>{" "}
                for details.
              </p>
              <div className="divider lg:divider-horizontal"></div>
            </div>
            {/* Contact & Visit Section */}
            <div className="flex flex-col">
              <h3 className="font-bold text-lg uppercase">Need Help?</h3>
              <p className="mt-2 text-xs">info@perfumeshop.com</p>
              <h3 className="font-bold text-lg uppercase mt-4">Visit Us</h3>
              <p className="mt-2 text-xs">
                PERFUMESHOP, INC.
                <br />
                789 OCEAN AVE.
                <br />
                CORAL CITY, CA 90210
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Section - Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6 pb-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
          {/* Shop by Department */}
          <div>
            <h4 className="font-bold mb-4 uppercase">Shop by Department</h4>
            <div className="grid grid-cols-2 gap-x-10">
              <ul className="space-y-2">
                <li>Perfumes</li>
                <li>Women's Perfume</li>
                <li>Men's Cologne</li>
                <li>Haircare</li>
                <li>Boutiques</li>
                <li>50% Off</li>
                <li>Samples</li>
                <li>Skincare</li>
                <li>Aromatherapy</li>
              </ul>
              <ul className="space-y-2">
                <li>Best Sellers</li>
                <li>Clearance</li>
                <li>For Kids</li>
                <li>Makeup</li>
                <li>Candles</li>
                <li>New Arrivals</li>
                <li>Mini</li>
                <li>Hard To Find</li>
              </ul>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-bold mb-4 uppercase">Customer Support</h4>
            <div className="grid grid-cols-2 gap-x-10">
              <ul className="space-y-2">
                <li>Gift Certificates</li>
                <li>Gift Certificate Balance</li>
                <li>Accessibility Policy</li>
                <li>Return Policy</li>
                <li>Security Pledge</li>
                <li>Terms Of Use</li>
                <li>Shipping Rates</li>
                <li>100% Genuine</li>
              </ul>
              <ul className="space-y-2">
                <li>Wholesale Information</li>
                <li>Affiliate Program</li>
                <li>Sitemap</li>
                <li>Perfume Coupons</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>

          {/* My Account */}
          <div>
            <h4 className="font-bold mb-4 uppercase">My Account</h4>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Register Now</li>
              <li>Order Status</li>
              <li>Reminder Club</li>
              <li>Sign In</li>
            </ul>
          </div>

          {/* Social Media & Subscription */}
          <div className="flex flex-col">
            <div className="flex space-x-4 text-2xl">
              <FaFacebookF className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaPinterest className="cursor-pointer" />
            </div>
            <div className="mt-4">
              <button className="flex gap-2 border border-gray-500 px-4 py-2 uppercase">
                <span>
                  <img
                    className=""
                    src="/images/Footer/footer1.png"
                    alt="img"
                  />
                </span>
                Change Country
              </button>
            </div>
            <div className="mt-4">
              <button className="flex gap-2 border border-gray-500 px-4 py-2 uppercase">
                <span>
                  <img
                    className=""
                    src="/images/Footer/footer2.png"
                    alt="img"
                  />
                </span>
                Subscription Club
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-gray-400 text-center py-6 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <p className="text-sm mb-2">
            Customer Service Code: 0A &nbsp; | &nbsp;
            <a href="/" className="text-white hover:underline">
              Privacy Policy
            </a>{" "}
            &nbsp; | &nbsp;
            <a href="/" className="text-white hover:underline">
              CA Privacy Notice
            </a>
          </p>
          <p className="text-sm mb-2">
            Entire Contents Copyright © 1997-2023. PerfumeShop.com, Inc.
          </p>
          <p className="text-xs max-w-3xl mx-auto mb-4">
            PerfumeShop.com is an independent retailer carrying genuine brand
            name perfumes, skincare, haircare, candles, and makeup. PerfumeShop
            and PerfumeShop.com are trademarks of PerfumeShop, Inc. and are
            registered in the US Patent & Trademark Office.
          </p>
          <p className="text-xs">All Rights Reserved.</p>

          {/* Payment Icons */}
          <div className="flex justify-center gap-3 mt-4">
            <img src="/images/Footer/visa.png" alt="Visa" className="h-6" />
            <img
              src="/images/Footer/visa.png"
              alt="Mastercard"
              className="h-6"
            />
            <img src="/images/Footer/visa.png" alt="Discover" className="h-6" />
            <img
              src="/images/Footer/mastercard.png"
              alt="PayPal"
              className="h-6"
            />
            <img
              src="/images/Footer/mastercard.png"
              alt="ShopPay"
              className="h-6"
            />
            <img
              src="/images/Footer/mastercard.png"
              alt="Amazon Pay"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFooterComponent;
