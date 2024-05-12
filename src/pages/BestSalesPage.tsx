import React, { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { getBestSales } from "../store/products/action";
import { BestSalesContainer } from "../containers/BestSalesContainer";

const BestSalesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBestSales());
  }, [dispatch]);

  return <BestSalesContainer />;
};

export default BestSalesPage;
