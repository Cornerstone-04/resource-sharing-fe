import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landing";
import ErrorPage from "../pages/error/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <LandingPage /> }],
  },
]);
