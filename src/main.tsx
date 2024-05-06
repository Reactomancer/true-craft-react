import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import CatalogItems from "./pages/CatalogItems";
import CatalogProducts from "./pages/CatalogProducts";
import PageLayout from "./pages/Layouts/PageLayout";
import { AdminPage } from "./pages/admin";
import DashboardPage from "./containers/AdminPageContainer/dashboard";
import { AddProductPage } from "./pages/admin/AddProductPage";
import { AddCatPage } from "./pages/admin/AddCatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { element: <HomePage />, index: true },
      {
        path: "catalog",
        children: [
          { index: true, element: <CatalogProducts /> },
          {
            path: "items",
            element: <CatalogItems />,
            children: [
              {
                path: "product",
                element: <Product />,
              },
            ],
          },
        ],
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "admin",
    children: [
      { element: <AdminPage />, index: true },
      {
        path: "dashboard",
        children: [
          { element: <DashboardPage />, index: true },
          { path: "products", element: <AddProductPage /> },
          { path: "categories", element: <AddCatPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
