'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs"

const Header = () => {

  const { user } = useUser();

  return (
    <div className="w-full h-[10vh]">
      <div className="w-[90%] h-full mx-auto flex items-center justify-between">
        {user && <h1 className="hidden sm:block text-xl md:text-2xl font-bold">{`${user?.firstName}'s Space`}</h1>}

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