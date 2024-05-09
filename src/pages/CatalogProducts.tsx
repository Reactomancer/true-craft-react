import React, { useEffect } from "react";
import { CatalogPageContainer } from "../containers/CatalogPageContainer";
import { getCategories } from "../store/categories/actions";
import { useAppDispatch } from "../store/hooks";

export const CatalogProducts: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <CatalogPageContainer />;
};
