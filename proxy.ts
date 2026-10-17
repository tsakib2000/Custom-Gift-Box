import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/middleware";

const protectedRoutes: string[] = [];

const authRoutes = ["/login", "/register"];

export async function proxy(request: NextRequest) {
  const { supabase, response } = createClient(request);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  const isAuthRoute = authRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  const isProtectedRoute = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (!user && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", `${pathname}${request.nextUrl.search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
