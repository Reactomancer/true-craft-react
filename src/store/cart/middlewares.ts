import { routes } from "../../routes";
import { notificationsStore } from "../../utils/use-notification-store";
import { startAppListening } from "../start-app-listening";
import { addToCart, submitOrder } from "./actions";

startAppListening({
  actionCreator: submitOrder.fulfilled,
  effect: () => {
    routes.navigate("/successfull");
    notificationsStore.actions.push({
      variant: "success",
      title: "Successfully created Order",
      message: "Please check your orders after 10 minutes",
    });
  },
});

startAppListening({
  actionCreator: addToCart.fulfilled,
  effect: () => {
    notificationsStore.actions.push({
      variant: "success",
      title: "Added product to cart",
      message: "Added product to cart",
    });
  },
});
