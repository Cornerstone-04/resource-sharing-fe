import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  const [hasStudentEmail, setHasStudentEmail] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Only for Unilorin students
        </p>
      </div>

      <form className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email (any)</Label>
          <Input type="email" id="email" placeholder="you@example.com" />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasStudentEmail"
            checked={hasStudentEmail}
            onCheckedChange={() => setHasStudentEmail(!hasStudentEmail)}
            className="data-[state=checked]:bg-kw-primary dark:data-[state=checked]:bg-kw-primary size-5"
          />
          <Label htmlFor="hasStudentEmail" className="text-sm">
            Do you have access to your student email
            (@students.unilorin.edu.ng)?
          </Label>
        </div>

        {hasStudentEmail && (
          <div className="space-y-2">
            <Label htmlFor="studentEmail">Student Email</Label>
            <Input
              id="studentEmail"
              placeholder="matric@students.unilorin.edu.ng"
              type="email"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" placeholder="••••••••" />
        </div>

        <Button type="submit" className="w-full bg-kw-primary">
          Continue
        </Button>
      </form>

      <div className="text-sm text-center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
