import { createBrowserRouter, Navigate } from "react-router";
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
import { AuthGuard, GuestGuard } from "./auth-guard";
import ResetPasswordPage from "@/pages/auth/reset-password";
import ProfilePage from "@/pages/dasboard/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestGuard>
        <LandingPage />
      </GuestGuard>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: (
      <GuestGuard>
        <AuthLayout />
      </GuestGuard>
    ),
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "verify-email", element: <VerifyEmailPage /> },
      { path: "verify-docs", element: <VerifyDocsPage /> },
      { path: "verify-success", element: <VerifySuccessPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <DashboardLayoutWrapper />
      </AuthGuard>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "resources", element: <ResourcesPage /> },
      { path: "my-resources", element: <MyMaterialsPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "upload-resource", element: <UploadPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
