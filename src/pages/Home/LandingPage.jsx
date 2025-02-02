import React from "react";
import Navbar from "../../layouts/shared/navbar/Navbar";
import Offer from "../../components/offer/Offer";
import Slider from "../../components/slider/Slider";
import Banner from "../../components/banner/Banner";
import ShopAll from "../../components/shopAll/ShopAll";
import Footer from "../../layouts/shared/footer/Footer";
import Certificate from "../../components/certificate/Certificate";
// import GiftBanner from "../../components/slider/Test";
import NewArrival from "../../components/newArrival/NewArrival";
import Recommended from "../../components/recommended/Recommended";
import BestSeller from "../../components/bestSeller/BestSeller";
import ProductCategories from "../../components/productCard/ProductCard";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Offer></Offer>
      <Slider></Slider>
      <Banner></Banner>
      <ShopAll></ShopAll>
      <ProductCategories></ProductCategories>
      {/* <GiftBanner></GiftBanner> */}
      <Recommended></Recommended>
      <NewArrival></NewArrival>
      <Certificate></Certificate>
      <BestSeller></BestSeller>
      <Footer></Footer>

    </>
  );
};

export default LandingPage;
