import { createBrowserRouter } from "react-router";
import LandingPage from "@/pages/landing";
import RegisterPage from "@/pages/auth/register";
import ErrorPage from "@/pages/error/error-page";
import NotFoundPage from "@/pages/error/not-found";
import LoginPage from "@/pages/auth/login";
import AuthLayout from "@/layouts/auth-layout";
import VerifyDocsPage from "@/pages/auth/verify-docs";
import VerifySuccessPage from "@/pages/auth/verify-success";
import VerifyEmailPage from "@/pages/auth/verify-email";
import DashboardHome from "@/pages/dasboard";
import DashboardLayoutWrapper from "@/layouts/dashboard-layout-wrapper";
import ResourcesPage from "@/pages/dasboard/resources";
import MyMaterialsPage from "@/pages/dasboard/my-materials";
import ChatPage from "@/pages/dasboard/chat";
import UploadPage from "@/pages/dasboard/upload";

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
    element: <DashboardLayoutWrapper />, // authenticated layout
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "my-resources", element: <MyMaterialsPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "upload-resource", element: <UploadPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />, // 404 fallback
  },
]);
