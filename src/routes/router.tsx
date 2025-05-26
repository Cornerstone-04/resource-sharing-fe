import { createBrowserRouter } from "react-router";
import LandingPage from "@/pages/landing";
import RegisterPage from "@/pages/auth/register";
import ErrorPage from "@/pages/error/error-page";
import NotFoundPage from "@/pages/error/not-found";
import LoginPage from "@/pages/auth/login";
import AuthLayout from "@/layouts/auth-layout";
import AppLayout from "@/layouts/app-layout";
import VerifyDocsPage from "@/pages/auth/verify-docs";
import VerifySuccessPage from "@/pages/auth/verify-success";
import VerifyEmailPage from "@/pages/auth/verify-email";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />, // handles routes like login/register
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "verify-email", element: <VerifyEmailPage /> },
      { path: "verify-docs", element: <VerifyDocsPage /> },
      { path: "verify-success", element: <VerifySuccessPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AppLayout />, // authenticated layout
    errorElement: <ErrorPage />,
    children: [
      // Add nested dashboard routes later
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />, // 404 fallback
  },
]);
