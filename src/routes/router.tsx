// src/routes/router.tsx

import { createBrowserRouter } from "react-router";
import LandingPage from "@/pages/landing";
// import LoginPage from "@/pages/auth/login";
// import RegisterPage from "@/pages/auth/register";
// import VerifyOTPPage from "@/pages/auth/verify-otp";
// import VerifyDocsPage from "@/pages/auth/verify-docs";
// import VerifySuccessPage from "@/pages/auth/verify-success";
import ErrorPage from "@/pages/error/error-page";
import NotFoundPage from "@/pages/error/not-found";
// import AuthLayout from "@/layouts/auth-layout"; // optional layout wrapper for auth
// import AppLayout from "@/layouts/app-layout";   // for dashboard etc.

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <AuthLayout />, // handles routes like login/register
    errorElement: <ErrorPage />, // general error handler
    children: [
      { index: true, element: <LandingPage /> },
      // { path: "login", element: <LoginPage /> },
      // { path: "register", element: <RegisterPage /> },
      // { path: "verify-otp", element: <VerifyOTPPage /> },
      // { path: "verify-docs", element: <VerifyDocsPage /> },
      // { path: "verify-success", element: <VerifySuccessPage /> },
    ],
  },
  {
    path: "/dashboard",
    // element: <AppLayout />, // authenticated layout
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
