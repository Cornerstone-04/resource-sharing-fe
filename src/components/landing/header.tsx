import { Link } from "react-router";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur sticky top-0 z-50">
      <h1 className="text-2xl font-extrabold tracking-tight">KàwéHub</h1>
      <div className="space-x-4">
        <Link to="/auth/login">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link to="/auth/register">
          <Button>Register</Button>
        </Link>
      </div>
    </header>
  );
}
