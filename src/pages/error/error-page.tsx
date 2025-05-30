import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { AlertCircle } from "lucide-react";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-lg border border-red-200 dark:border-red-800 shadow-sm max-w-md w-full space-y-4">
        <AlertCircle className="w-12 h-12 mx-auto" />
        <h1 className="text-xl font-bold">Something went wrong</h1>
        <p className="text-sm text-muted-foreground">
          We encountered an unexpected error. Please try again or go back home.
        </p>
        <Button onClick={() => navigate("/")} className="w-full">
          Go to Home
        </Button>
      </div>
    </div>
  );
}
