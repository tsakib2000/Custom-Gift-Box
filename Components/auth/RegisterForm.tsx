"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Eye, EyeOff } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { AuthField, authButtonStyles } from "@/Components/auth/fields";

function scorePassword(value: string) {
  let score = 0;
  if (value.length >= 8) score++;
  if (value.length >= 12) score++;
  if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
  if (/\d/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;
  return Math.min(score, 4);
}

const LABELS = ["Too short", "Weak", "Fair", "Good", "Strong"];
const BAR_COLORS = ["#d8cfc5", "#c98b7a", "#d4b483", "#a8b58a", "#7d9b76"];

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const score = useMemo(() => scorePassword(password), [password]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "");

    const next: Record<string, string> = {};
    const name = get("name");
    const email = get("email");
    const confirm = get("confirmPassword");

    if (!name.trim()) next.name = "Name is required";
    if (!email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 8) next.password = "Must be at least 8 characters";
    if (!confirm) next.confirmPassword = "Confirm your password";
    else if (confirm !== password) next.confirmPassword = "Passwords do not match";
    if (!form.get("terms")) next.terms = "Please accept the terms to continue";

    setErrors(next);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <AuthField
        id="name"
        label="Full name"
        placeholder="Your name"
        autoComplete="name"
        error={errors.name}
      />
      <AuthField
        id="email"
        label="Email"
        type="email"
        placeholder="name@example.com"
        autoComplete="email"
        error={errors.email}
      />
      <AuthField
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        placeholder="At least 8 characters"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        trailing={
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-[#a89880] transition hover:text-[#8a7560]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />

      {password && (
        <div className="grid gap-2">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-1 flex-1 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i < score ? BAR_COLORS[score] : "#e8e0d6",
                }}
              />
            ))}
          </div>
          <p className="text-xs text-[#a89880]">
            Password strength:{" "}
            <span style={{ color: BAR_COLORS[score] }}>{LABELS[score]}</span>
          </p>
        </div>
      )}

      <AuthField
        id="confirmPassword"
        label="Confirm password"
        type={showPassword ? "text" : "password"}
        placeholder="Repeat your password"
        autoComplete="new-password"
        error={errors.confirmPassword}
      />

      <div className="grid gap-1.5">
        <label className="flex items-start gap-2.5 text-sm text-[#8a7560]">
          <input
            type="checkbox"
            name="terms"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#d8cfc5] accent-[#8a7560]"
          />
          <span>
            I agree to the{" "}
            <Link href="#" className="underline underline-offset-4">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.terms && (
          <p className="pl-6 text-xs text-[#b4534a]">{errors.terms}</p>
        )}
      </div>

      <Button type="submit" className={authButtonStyles}>
        <Check size={16} className="mr-1.5" />
        Create Account
      </Button>
    </form>
  );
}