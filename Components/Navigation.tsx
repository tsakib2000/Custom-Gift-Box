"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CartDrawer } from "./CartDrawer";
import { useTheme, useAuth } from "@/app/store";

function NavigationBar() {
  const theme = useTheme((state) => state.theme);
  console.log("Current theme:", theme); // Log the current theme to the console
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuth((state) => state.user);
  const loading = useAuth((state) => state.loading);
  const signOut = useAuth((state) => state.signOut);
  const isHome = pathname === "/";

  async function handleSignOut() {
    await signOut();
    router.refresh();
  }

  const menuLinks = [
    {
      name: "BUILD A BOX",
      link: "custom-box",
    },
    {
      name: "PREMADE",
      link: "premade",
    },
    {
      name: "CORPORATE GIFTS",
      link: "corporateGifts",
    },
    {
      name: "BLOG",
      link: "blog",
    },
    {
      name: "ABOUT US",
      link: "aboutUs",
    },
  ];

  return (
    <div
      className={`${
        isHome
          ? "bg-transparent absolute top-[130.5px] left-1/2 -translate-x-1/2 w-11/12 mx-auto"
          : "bg-[#a3907a] relative w-full"
      }`}
    >
      <div className="flex justify-between items-center py-2.5 w-11/12 mx-auto">
        <div>
          <Link href={"/"}>
            <Image width={80} height={80} src="/logo_white.png" alt="logo" />
          </Link>
        </div>

        <div className="">
          <ul className="flex gap-7 *:text-white font-light w-full justify-end mb-2">
            {!loading && user ? (
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="max-w-[10rem] truncate uppercase tracking-[0.1em] transition hover:opacity-80"
                    >
                      {user.user_metadata?.full_name ??
                        user.user_metadata?.name ??
                        user.email}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white mr-1.5" align="end">
                    <DropdownMenuLabel className="text-xs uppercase tracking-[0.14em] text-[#8a7560]">
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-[#b4534a] focus:bg-gray-100"
                      onSelect={handleSignOut}
                    >
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ) : (
              <>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/register"}>Register</Link>
                </li>
              </>
            )}
            <li><CartDrawer/></li>
          </ul>
          <ul className="hidden md:flex gap-4 text-white font-bold">
            {menuLinks.map((link) => (
              <li key={link.link}>
                <Link href={`/${link.link}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#262626] text-white">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white mr-1.5">
              {menuLinks.map((link) => (
                <DropdownMenuItem key={link.link} className="hover:bg-gray-200">
                  <Link href={`/${link.link}`}>{link.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;