import { Link } from "react-router";
import ResetPasswordForm from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">Reset your password</h2>
      <p className="text-sm text-muted-foreground">
        Enter your email and we’ll send you a reset link.
      </p>

      <ResetPasswordForm />

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
