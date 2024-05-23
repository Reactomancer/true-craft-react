import React, { useEffect } from "react";
import { CheckoutContainer } from "../containers/CheckoutContainer";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userByIdSelector } from "../store/users/selectors";

const Checkout: React.FC = () => {
  // const dispatch = useAppDispatch();
  // const user = useAppSelector(userByIdSelector);

  // useEffect(() => {
  //   if (user?.id) {
  //   }
  // }, [dispatch, user?.id]);
  return <CheckoutContainer />;
};

export default Checkout;
