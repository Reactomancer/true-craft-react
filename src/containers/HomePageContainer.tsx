import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import DiscoverComponent from "../components/DiscoverComponent";
import TopSales from "../components/TopSales";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";
import TimelessComponent from "../components/TimelessComponent";
import Testmonials from "../components/Testmonials";
import HeroSection from "../components/HeroSection";
import Subscribe from "../components/Subscribe";
import { useAppSelector } from "../store/hooks";
import { userByIdSelector } from "../store/users/selectors";

const HomePageContainer: React.FC = () => {
  const user = useAppSelector(userByIdSelector);
  return (
    <>
      <Header />
      <SearchBar user={user} />
      <DiscoverComponent />
      <TopSales />
      <TimelessComponent />
      <Testmonials />
      <HeroSection />
      <Subscribe />
      <SocialLinks />
      <Footer />
    </>
  );
};

export default HomePageContainer;
