export const calculatePasswordStrength = (password: string) => {
  let score = 0;
  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /\d/.test(password),
    symbols: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  Object.values(checks).forEach((check) => check && score++);

  let strength = "Very Weak";
  let color = "bg-red-500";
  let width = "20%";

  if (score >= 4) {
    strength = "Strong";
    color = "bg-green-500";
    width = "80%";
  } else if (score >= 3) {
    strength = "Medium";
    color = "bg-yellow-500";
    width = "60%";
  } else if (score >= 2) {
    strength = "Weak";
    color = "bg-orange-500";
    width = "40%";
  }

  return { strength, color, width, checks, score };
};
