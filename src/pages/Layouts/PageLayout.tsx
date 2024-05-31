import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUserData } from "../../store/users/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { userByIdSelector } from "../../store/users/selectors";
import Footer from "../../components/Footer";
import { routes } from "../../routes";

const PageLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  const user = useAppSelector(userByIdSelector);

  const handleClickSearch = (searchText: string) => {
    if (searchText && searchText != "") {
      routes.navigate(`/search/${searchText}`);
    }
  };

  return (
    <>
      <Header />
      <div className="pt-24"></div>
      <SearchBar onSearch={handleClickSearch} user={user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
