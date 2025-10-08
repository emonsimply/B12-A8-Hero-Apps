import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
        Component: () => <div>Apps Page</div>,
      },
      {
        path: "/appDetails",
        Component: () => <div>Apps Page</div>,
      }
    ]
  },
]);