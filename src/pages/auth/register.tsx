import { RegisterForm } from "@/components/auth/register-form";
import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Only for Unilorin students
        </p>
      </div>

      <RegisterForm />

      <div className="text-sm text-center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
