import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { routes } from "./routes";
import "./index.css";
import "./store/users/middlewares";
import "./store/cart/middlewares";
import { NotificationsContainer } from "./containers/notifications";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <NotificationsContainer />
    <RouterProvider router={routes} />
  </Provider>
);
