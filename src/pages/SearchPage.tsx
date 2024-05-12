import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { searchProducts } from "../store/products/action";
import { useParams } from "react-router-dom";
import { SearchContainer } from "../containers/SearchContainer";

const SearchPage: React.FC = () => {
  const { searchText } = useParams<{ searchText: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchText) {
      dispatch(searchProducts({ searchText }));
    }
  }, [dispatch, searchText]);

  return <SearchContainer />;
};

export default SearchPage;
