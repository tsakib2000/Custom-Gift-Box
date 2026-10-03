"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { AuthField, authButtonStyles } from "@/Components/auth/fields";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    const next: typeof errors = {};
    if (!email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 8) next.password = "Must be at least 8 characters";

    setErrors(next);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
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
        placeholder="••••••••"
        autoComplete="current-password"
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

      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-xs uppercase tracking-[0.14em] text-[#8a7560] underline-offset-4 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className={authButtonStyles}>
        Sign In
      </Button>

      <p className="text-center text-xs text-[#a89880]">
        By continuing you agree to our terms and privacy policy.
      </p>
    </form>
  );
}