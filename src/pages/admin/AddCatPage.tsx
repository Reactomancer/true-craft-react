import { getCategories } from "../../store/categories/actions";
import { useAppDispatch } from "../../store/hooks";
import AddCatPageContainer from "../../containers/AdminPageContainer/AddCatPageContainer";
import { useEffect } from "react";

export const AddCatPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <AddCatPageContainer />;
};
