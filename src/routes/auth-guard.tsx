// AuthGuard.tsx
import { Navigate, useLocation } from "react-router";
import { useAuthStatus } from "@/hooks/useAuth";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStatus();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  // If not logged in, redirect to login
  if (!user) return <Navigate to="/auth/login" state={{ from: location }} replace />;

  return <>{children}</>;
}

export function GuestGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthStatus();

  if (loading) return <div>Loading...</div>;

  // If logged in, redirect to dashboard
  if (user) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}