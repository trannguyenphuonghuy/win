// components/shared/InputField.tsx

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}

export default function InputField({
  label,
  placeholder,
  value,
  error,
  type = "text",
  onChange,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <Label className="text-muted">
        {label}
      </Label>

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`border-soft text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-white ${
          error
            ? "border-red-500 focus-visible:ring-red-500"
            : ""
        }`}
      />

      {error && (
        <p className="text-[10px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}