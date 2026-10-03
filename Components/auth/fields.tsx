import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

const fieldStyles = {
  label:
    "text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a89880]",
  input:
    "h-11 rounded-lg border-[#d8cfc5] bg-white px-3.5 text-sm text-[#2c2420] placeholder:text-[#c4b8a8] focus-visible:border-[#8a7560] focus-visible:ring-[#8a7560]/25",
  error: "text-xs text-[#b4534a]",
};

interface FieldProps {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
  trailing?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function AuthField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  error,
  trailing,
  value,
  onChange,
}: FieldProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className={fieldStyles.label}>
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          className={fieldStyles.input}
        />
        {trailing && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 text-xs">
            {trailing}
          </div>
        )}
      </div>
      {error && <p className={fieldStyles.error}>{error}</p>}
    </div>
  );
}

export const authButtonStyles =
  "h-11 w-full rounded-full bg-[#2c2420] text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#8a7560]";

export const authDividerStyles = "flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-[#c4b8a8]";