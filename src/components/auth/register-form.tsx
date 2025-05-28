import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegister } from "@/hooks/useRegister";
import { useAppNavigate } from "@/hooks/navigation";
import { ThreeDotsLoader } from "../shared/three-dot-loader";
import { toast } from "sonner";

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [hasStudentEmail, setHasStudentEmail] = useState(false);
  const { registerUser, isLoading } = useRegister();
  const { goToDashboard } = useAppNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.warning("Passwords do not match");
    }

    const finalEmail = hasStudentEmail ? studentEmail : email;

    const data = {
      firstName,
      lastName,
      phone,
      studentEmail: hasStudentEmail ? studentEmail : "",
    };

    const success = await registerUser(finalEmail, password, data);
    if (success) {
      goToDashboard();
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (any)</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasStudentEmail"
          checked={hasStudentEmail}
          onCheckedChange={() => setHasStudentEmail(!hasStudentEmail)}
          className="data-[state=checked]:bg-kw-primary dark:data-[state=checked]:bg-kw-primary size-5"
        />
        <Label htmlFor="hasStudentEmail" className="text-sm">
          Do you have access to your student email (@students.unilorin.edu.ng)?
        </Label>
      </div>

      {hasStudentEmail && (
        <div className="space-y-2">
          <Label htmlFor="studentEmail">Student Email</Label>
          <Input
            id="studentEmail"
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full text-white bg-kw-primary">
        {isLoading ? <ThreeDotsLoader /> : "Register"}
      </Button>
    </form>
  );
};
