import { routes } from "../../routes";
import { startAppListening } from "../start-app-listening";
import { submitOrder } from "./actions";

startAppListening({
  actionCreator: submitOrder.fulfilled,
  effect: () => {
    routes.navigate("/orders");
  },
});
