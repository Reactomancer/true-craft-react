import { isAnyOf } from "@reduxjs/toolkit";

import { startAppListening } from "../start-app-listening";
import { loginUser, registerUser } from "./actions";
import { routes } from "../../routes";

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
