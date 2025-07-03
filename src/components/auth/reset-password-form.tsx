import { useState, type FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePasswordReset } from "@/hooks/usePasswordReset";
import { ThreeDotsLoader } from "../shared/three-dot-loader";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { sendResetEmail, isResetting } = usePasswordReset();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    await sendResetEmail(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-left max-w-md mx-auto"
    >
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? "border-red-500" : ""}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-kw-primary text-white"
        disabled={isResetting}
      >
        {isResetting ? <ThreeDotsLoader /> : "Send reset link"}
      </Button>
    </form>
  );
}
