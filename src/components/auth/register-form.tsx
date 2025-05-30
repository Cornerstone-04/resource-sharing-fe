import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRegister } from "@/hooks/useRegister";
import { useAppNavigate } from "@/hooks/navigation";
import { ThreeDotsLoader } from "../shared/three-dot-loader";
import { toast } from "sonner";
import { PasswordStrengthIndicator } from "../shared/password-strength-indicator";
import { Eye, EyeOff } from "lucide-react";

type FieldErrors = {
  [key: string]: string;
};

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [hasStudentEmail, setHasStudentEmail] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { registerUser, isLoading } = useRegister();
  const { goToDashboard } = useAppNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: FieldErrors = {};
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!phone.trim()) errors.phone = "Phone is required";

    if (hasStudentEmail) {
      if (!studentEmail.trim())
        errors.studentEmail = "Student email is required";
    } else {
      if (!email.trim()) errors.email = "Email is required";
    }

    if (!password.trim()) errors.password = "Password is required";
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      toast.warning("Passwords do not match");
    }

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const finalEmail = hasStudentEmail ? studentEmail : email;

    const data = {
      firstName,
      lastName,
      phone,
      studentEmail: hasStudentEmail ? studentEmail : "",
    };

    const success = await registerUser(finalEmail, password, data);
    if (success) goToDashboard();
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
            className={fieldErrors.firstName ? "border-red-500" : ""}
          />
          {fieldErrors.firstName && (
            <p className="text-red-500 text-sm">{fieldErrors.firstName}</p>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={fieldErrors.lastName ? "border-red-500" : ""}
          />
          {fieldErrors.lastName && (
            <p className="text-red-500 text-sm">{fieldErrors.lastName}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email (any)</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldErrors.email ? "border-red-500" : ""}
        />
        {fieldErrors.email && (
          <p className="text-red-500 text-sm">{fieldErrors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={fieldErrors.phone ? "border-red-500" : ""}
        />
        {fieldErrors.phone && (
          <p className="text-red-500 text-sm">{fieldErrors.phone}</p>
        )}
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
            className={fieldErrors.studentEmail ? "border-red-500" : ""}
          />
          {fieldErrors.studentEmail && (
            <p className="text-red-500 text-sm">{fieldErrors.studentEmail}</p>
          )}
        </div>
      )}

      <div className="space-y-2">
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
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {fieldErrors.password && (
          <p className="text-red-500 text-sm">{fieldErrors.password}</p>
        )}
        <PasswordStrengthIndicator password={password} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`pr-10 ${
              fieldErrors.confirmPassword ? "border-red-500" : ""
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {fieldErrors.confirmPassword && (
          <p className="text-red-500 text-sm">{fieldErrors.confirmPassword}</p>
        )}
      </div>

      <Button type="submit" className="w-full text-white bg-kw-primary">
        {isLoading ? <ThreeDotsLoader /> : "Register"}
      </Button>
    </form>
  );
};
