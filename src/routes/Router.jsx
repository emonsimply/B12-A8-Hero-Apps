import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/Apps/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component:Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
      }
    ]
  },
]);