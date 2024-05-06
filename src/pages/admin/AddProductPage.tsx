import { useAppDispatch } from "../../store/hooks";
import AddProductPageContainer from "../../containers/AdminPageContainer/AddProductPageContainer";
import { useEffect } from "react";
import { getProducts } from "../../store/products/action";

export const AddProductPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <AddProductPageContainer />;
};
