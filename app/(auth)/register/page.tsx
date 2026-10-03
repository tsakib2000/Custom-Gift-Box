import Link from "next/link";
import AuthShell from "@/Components/auth/AuthShell";
import RegisterForm from "@/Components/auth/RegisterForm";

export const metadata = {
  title: "Create Account — Box & tale",
  description: "Create your Box & tale account",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Save your gift boxes, revisit past orders, and get early access to seasonal collections."
      quote={{
        text: "A gift is not a thing you give. It is a way of showing care.",
        author: "Box & tale",
      }}
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#2c2420] underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}