import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getOrders } from "../store/cart/actions";
import { userByIdSelector } from "../store/users/selectors";
import { OrdersList } from "../containers/OrderList";

export const Orders: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userByIdSelector);

  useEffect(() => {
    if (user?.id) {
      dispatch(getOrders(user.id));
    }
  }, [dispatch, user]);

  return (
    <div>
      {user ? (
        <OrdersList user={user} />
      ) : (
        <p className="text-2xl text-center font-bold">You are not authorized</p>
      )}
    </div>
  );
};
