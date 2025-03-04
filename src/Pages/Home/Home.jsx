import React, { useEffect } from "react";
import Banner from "./HomeComponent/Banner";

import CustomerReview from "../../Components/CustomerReview";
import HomeAbout from "./HomeComponent/HomeAbout";
import HomeSlider from "./HomeComponent/HomeSlider";
import HomeServices from "./HomeComponent/HomeServices";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <HomeAbout></HomeAbout>
      <HomeSlider></HomeSlider>
      <HomeServices></HomeServices>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
