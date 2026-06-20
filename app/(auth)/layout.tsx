// app/(auth)/layout.tsx
import { redirect } from "next/navigation"


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
    <div className=" min-h-screen ">
      

        <div className=" min-h-screen w-full flex flex-col items-center justify-center">
          {children}
        </div>
      
    </div>
  )
}