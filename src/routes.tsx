import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./pages/Layouts/PageLayout";
import HomePage from "./pages/HomePage";
import { CatalogProducts } from "./pages/CatalogProducts";
import CatalogItems from "./pages/CatalogItems";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AdminPage } from "./pages/admin";
import DashboardPage from "./containers/AdminPageContainer/dashboard";
import { AddProductPage } from "./pages/admin/AddProductPage";
import { AddCatPage } from "./pages/admin/AddCatPage";
import SearchPage from "./pages/SearchPage";
import BestSalesPage from "./pages/BestSalesPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/search/:searchText", element: <SearchPage /> },
      { path: "bestsales", element: <BestSalesPage /> },
      {
        path: "catalog",
        children: [
          { path: "", element: <CatalogProducts /> },
          {
            path: ":categoryId",
            children: [
              { path: "", element: <CatalogItems /> },
              {
                path: ":productId",
                element: <Product />,
              },
            ],
          },
        ],
      },
      { path: "checkout", element: <Checkout /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "admin",
    children: [
      { path: "", element: <AdminPage /> },
      {
        path: "dashboard",
        children: [
          { path: "", element: <DashboardPage /> },
          { path: "products", element: <AddProductPage /> },
          { path: "categories", element: <AddCatPage /> },
        ],
      },
    ],
  },
]);
