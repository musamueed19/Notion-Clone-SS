'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
    let { user } = useUser();
  return (
    <div className="h-[8vh]">
      <div className="w-[90%] md:w-[90%] h-full flex justify-between items-center mx-auto">
        {/* Logo or User Title */}
        <Link href="/" className="font-bold text-xl md:text-2xl">
          {user ? `${user?.firstName}'s Space` : "Home"}
        </Link>

        {/* Breadcumb */}
        <div></div>

              {/* User Logged In - States control - Section */}
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
};

export default Header;
