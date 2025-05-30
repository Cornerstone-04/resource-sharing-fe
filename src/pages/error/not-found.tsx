import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Ghost } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm max-w-md w-full space-y-4">
        <Ghost className="w-12 h-12 mx-auto" />
        <h1 className="text-2xl font-bold">404 – Page Not Found</h1>
        <p className="text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Button onClick={() => navigate("/dashboard")} className="w-full">
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
