import { Link } from "react-router";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Welcome Back</h1>
      <p className="text-sm text-muted-foreground">
        Login to borrow and lend resources easily.
      </p>

      <LoginForm />

      <p className="text-sm text-muted-foreground mt-4">
        Don’t have an account?{" "}
        <Link
          to="/auth/register"
          className="text-blue-600 dark:text-blue-400 font-medium"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
