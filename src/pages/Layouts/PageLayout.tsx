import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUserData } from "../../store/users/actions";
import { useAppDispatch } from "../../store/hooks";

const PageLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default PageLayout;
