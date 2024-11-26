'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";



import NewDocumentButton from "./NewDocumentButton"

const Sidebar = () => {

    const menuOptions = (
      <>
            <NewDocumentButton />
            
            {/* My Documents */}
            {/* My Lists */}

            {/* Share with Me */}
            {/* Lists */}
      </>
    );

  return (
    <div className="p-2 md:p-5 bg-gray-200 w-[12vw] relative">
      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="hover:opacity-30" size={30} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>

              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {/* Nav */}
      <div className="hidden md:flex flex-col items-center"> {menuOptions}</div>
    </div>
  );
}

export default Sidebar