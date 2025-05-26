import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Welcome Back</h1>
      <p className="text-sm text-muted-foreground">
        Login to borrow and lend resources easily.
      </p>

      <form className="space-y-4 text-left">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email address"
            type="email"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        <Button type="submit" className="w-full mt-4 bg-kw-primary ">
          Login
        </Button>
      </form>

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
