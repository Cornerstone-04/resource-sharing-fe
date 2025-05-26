import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";

export default function VerifySuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6">
      <CheckCircle2
        className="w-20 h-20 text-green-500 mx-auto"
        strokeWidth={1.5}
      />
      <h1 className="text-2xl font-bold">Verification Successful</h1>
      <Button
        className="w-full bg-kw-primary"
        onClick={() => navigate("/dashboard")}
      >
        Go to Dashboard
      </Button>
    </div>
  );
}
