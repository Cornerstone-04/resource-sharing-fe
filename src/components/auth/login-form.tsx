import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <form className="space-y-4 text-left">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email address" type="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="Enter your password"
          type="password"
        />
      </div>

      <Button type="submit" className="w-full mt-4 bg-kw-primary">
        Login
      </Button>
    </form>
  );
}
