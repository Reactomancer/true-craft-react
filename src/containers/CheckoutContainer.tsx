import React, { useEffect } from "react";
import { CheckoutComponent } from "../components/CheckoutForm";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userByIdSelector } from "../store/users/selectors";
import { userCartSelector } from "../store/cart/selectors";
import { getUserCart } from "../store/cart/actions";

export const CheckoutContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const user = useAppSelector(userByIdSelector);
  const cart = useAppSelector(userCartSelector);

  return (
    <div>
      {user ? (
        cart && <CheckoutComponent />
      ) : (
        <p className="text-2xl text-center font-bold">You are not authorized</p>
      )}
    </div>
  );
};
