import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getProducts } from "../store/products/action";
import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>Product{productId}</div>;
};

export default Product;
