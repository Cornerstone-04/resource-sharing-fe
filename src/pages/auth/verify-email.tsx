import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Check your email</h1>
      <p className="text-sm text-muted-foreground">
        Enter the verification code sent to{" "}
        <span className="font-medium">19-254673@students.unilorin.edu.ng</span>
      </p>

      <div className="flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button className="w-full bg-kw-primary">Verify email</Button>

      <p className="text-sm text-muted-foreground">
        Didn’t get the code?{" "}
        <span className="text-blue-600 dark:text-blue-400 underline cursor-pointer">
          Send a new code
        </span>
      </p>
    </div>
  );
}
