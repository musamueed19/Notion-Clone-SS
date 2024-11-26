'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs"
import Link from "next/link";

const Header = () => {

  const { user } = useUser();

  return (
    <div className="w-full h-[10vh]">
      <div className="w-[90%] h-full mx-auto flex items-center justify-between">

        {/* Logo / Home */}
          <Link href='/' className="hidden sm:block text-xl md:text-2xl font-bold cursor-pointer">
            {user ? `${user?.firstName}'s Space` : "Home"}
          </Link>

        {/* Breadcumb Area - section */}
        {/* It basically shows the Directory, we are currently Inside */}
        <div></div>

        {/* User Authentication - Control (LoggedIn States) - Section */}
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Header