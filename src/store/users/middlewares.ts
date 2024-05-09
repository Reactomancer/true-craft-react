import { isAnyOf } from "@reduxjs/toolkit";
import { router } from "../../main";
import { startAppListening } from "../start-app-listening";
import { loginUser, registerUser } from "./actions";

startAppListening({
  matcher: isAnyOf(loginUser.fulfilled, registerUser.fulfilled),
  effect: () => {
    router.navigate("/");
  },
});
