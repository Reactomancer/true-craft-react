import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUserData } from "../../store/users/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { userByIdSelector } from "../../store/users/selectors";
import Footer from "../../components/Footer";
import SocialLinks from "../../components/SocialLinks";
import { routes } from "../../routes";

const PageLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  const user = useAppSelector(userByIdSelector);

  const handleClickSearch = (searchText: string) => {
    routes.navigate(`/search/${searchText}`);
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleClickSearch} user={user} />
      <Outlet />
      <SocialLinks />
      <Footer />
    </>
  );
};

export default PageLayout;
