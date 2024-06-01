import { isAnyOf } from "@reduxjs/toolkit";

import { startAppListening } from "../start-app-listening";
import { addFav, deleteFav, loginUser, registerUser } from "./actions";
import { routes } from "../../routes";
import { notificationsStore } from "../../utils/use-notification-store";

startAppListening({
  matcher: isAnyOf(loginUser.fulfilled),
  effect: () => {
    routes.navigate("/");
  },
});

startAppListening({
  matcher: isAnyOf(registerUser.fulfilled),
  effect: () => {
    routes.navigate("/login");
  },
});

startAppListening({
  actionCreator: deleteFav.fulfilled,
  effect: () => {
    notificationsStore.actions.push({
      variant: "success",
      title: "Removed product from favorites",
      message: "Removed product from favorites",
    });
  },
});

startAppListening({
  actionCreator: addFav.fulfilled,
  effect: () => {
    notificationsStore.actions.push({
      variant: "success",
      title: "Added product to favorites",
      message: "Added product to favorites",
    });
  },
});
