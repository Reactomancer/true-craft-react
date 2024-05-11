import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getProductsByCategoryId } from "../store/products/action";
import { useParams } from "react-router-dom";
import { CatalogProductsContainer } from "../containers/CatalogProductsContainer";
import { getCategories } from "../store/categories/actions";

const CatalogItems: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductsByCategoryId(categoryId));
  }, [dispatch, categoryId]);

  return <CatalogProductsContainer categoryId={categoryId} />;
};

export default CatalogItems;
