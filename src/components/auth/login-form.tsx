import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { useAppNavigate } from "@/hooks/navigation";
import { ThreeDotsLoader } from "../shared/three-dot-loader";
import { toast } from "sonner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, isLoading } = useLogin();
  const { goToDashboard } = useAppNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.warning("Please fill in all fields");
    }

    const success = await loginUser(email, password);
    if (success) {
      goToDashboard();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button className="w-full mt-4 bg-kw-primary text-white">
        {isLoading ? <ThreeDotsLoader /> : "Login"}
      </Button>
    </form>
  );
}
