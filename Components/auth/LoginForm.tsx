"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { AuthField, authButtonStyles } from "@/Components/auth/fields";
import { authErrorMessage } from "@/Components/auth/errors";
import { createClient } from "@/utils/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(
    searchParams.get("error") === "auth"
      ? "We couldn't complete sign-in from that link. Please sign in normally."
      : null,
  );
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    const next: typeof errors = {};
    if (!email) next.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email";
    if (!password) next.password = "Password is required";
    else if (password.length < 8) next.password = "Must be at least 8 characters";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setFormError(authErrorMessage(error));
        return;
      }
      const redirectTo = searchParams.get("next") ?? "/";
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setFormError(authErrorMessage(err));
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      {formError && (
        <p
          role="alert"
          className="rounded-lg border border-[#e2b8b3] bg-[#fbf1ef] px-3.5 py-2.5 text-sm text-[#b4534a]"
        >
          {formError}
        </p>
      )}
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

      <Button type="submit" disabled={pending} className={authButtonStyles}>
        {pending ? "Signing in…" : "Sign In"}
      </Button>

      <p className="text-center text-xs text-[#a89880]">
        By continuing you agree to our terms and privacy policy.
      </p>
    </form>
  );
}
