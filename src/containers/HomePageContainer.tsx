import React from "react";

import DiscoverComponent from "../components/DiscoverComponent";
import TopSales from "../components/TopSales";

import TimelessComponent from "../components/TimelessComponent";
import Testmonials from "../components/Testmonials";
import HeroSection from "../components/HeroSection";
import Subscribe from "../components/Subscribe";

const HomePageContainer: React.FC = () => {
  return (
    <>
      <DiscoverComponent />
      <TopSales />
      <TimelessComponent />
      <Testmonials />
      <HeroSection />
      <Subscribe />
    </>
  );
};

export default HomePageContainer;
