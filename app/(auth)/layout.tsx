// app/(auth)/layout.tsx
import { redirect } from "next/navigation"
import { AuraBackground } from "@/Components/aura-background"


export const metadata = {
  title: "Sign in — Acme",
  description: "Sign in to your account",
}

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (
    <AuraBackground className="bg-[#faf8f2]">
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </AuraBackground>
  )
}