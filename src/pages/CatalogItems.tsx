import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getProductsByCategoryId } from "../store/products/action";
import { useParams } from "react-router-dom";

const CatalogItems: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsByCategoryId(id));
  }, [dispatch, id]);
  return <div>CatalogItems</div>;
};

export default CatalogItems;
