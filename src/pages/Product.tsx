import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getProductById } from "../store/products/action";
import { useParams } from "react-router-dom";
import { ProductContainer } from "../containers/ProductContainer";

const Product: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  return <ProductContainer />;
};

export default Product;
