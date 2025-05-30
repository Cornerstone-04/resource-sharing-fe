import { calculatePasswordStrength } from "@/lib/calculatePasswordStrength";
import { Check, X } from "lucide-react";

export const PasswordStrengthIndicator = ({
  password,
}: {
  password: string;
}) => {
  if (!password) return null;

  const { strength, color, width, checks } =
    calculatePasswordStrength(password);

  return (
    <div className="space-y-2 mt-2">
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${color}`}
            style={{ width }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-600">{strength}</span>
      </div>
      <div className="grid grid-cols-2 gap-1 text-xs">
        <div
          className={`flex items-center space-x-1 ${
            checks.length ? "text-green-600" : "text-gray-400"
          }`}
        >
          {checks.length ? <Check size={12} /> : <X size={12} />}
          <span>8+ characters</span>
        </div>
        <div
          className={`flex items-center space-x-1 ${
            checks.lowercase ? "text-green-600" : "text-gray-400"
          }`}
        >
          {checks.lowercase ? <Check size={12} /> : <X size={12} />}
          <span>Lowercase</span>
        </div>
        <div
          className={`flex items-center space-x-1 ${
            checks.uppercase ? "text-green-600" : "text-gray-400"
          }`}
        >
          {checks.uppercase ? <Check size={12} /> : <X size={12} />}
          <span>Uppercase</span>
        </div>
        <div
          className={`flex items-center space-x-1 ${
            checks.numbers ? "text-green-600" : "text-gray-400"
          }`}
        >
          {checks.numbers ? <Check size={12} /> : <X size={12} />}
          <span>Numbers</span>
        </div>
        <div
          className={`flex items-center space-x-1 ${
            checks.symbols ? "text-green-600" : "text-gray-400"
          }`}
        >
          {checks.symbols ? <Check size={12} /> : <X size={12} />}
          <span>Symbols</span>
        </div>
      </div>
    </div>
  );
};
