import Link from "next/link";
import AuthShell from "@/Components/auth/AuthShell";
import LoginForm from "@/Components/auth/LoginForm";

export const metadata = {
  title: "Sign In — Box & tale",
  description: "Sign in to your Box & tale account",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue curating your perfect gift box."
      quote={{
        text: "The details are not the details. They make the design.",
        author: "Charles Eames",
      }}
      footer={
        <>
          New here?
          <Link
            href="/register"
            className="font-medium text-[#2c2420] underline-offset-4 hover:underline"
          >
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}