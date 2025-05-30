import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useLogin";
import { useState, type FormEvent } from "react";
import { useAppNavigate } from "@/hooks/navigation";
import { ThreeDotsLoader } from "../shared/three-dot-loader";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

type FieldErrors = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { loginUser, isLoading } = useLogin();
  const { goToDashboard } = useAppNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FieldErrors = {};
    if (!email.trim()) errors.email = "Email is required";
    if (!password.trim()) errors.password = "Password is required";

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0)
      return toast.warning("Please fix the errors");

    const success = await loginUser(email, password);
    if (success) goToDashboard();
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
          className={fieldErrors.email ? "border-red-500" : ""}
        />
        {fieldErrors.email && (
          <p className="text-sm text-red-500">{fieldErrors.email}</p>
        )}
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`pr-10 ${fieldErrors.password ? "border-red-500" : ""}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {fieldErrors.password && (
          <p className="text-sm text-red-500">{fieldErrors.password}</p>
        )}
      </div>

      <Button type="submit" className="w-full mt-4 bg-kw-primary text-white">
        {isLoading ? <ThreeDotsLoader /> : "Login"}
      </Button>
    </form>
  );
}
