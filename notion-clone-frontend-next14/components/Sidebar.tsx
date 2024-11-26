"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NewDocumentButton from "./NewDocumentButton";
import { FaBars } from "react-icons/fa6";
import { MenuIcon } from "lucide-react";

const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* Lists ... */}


      {/* Shared with me */}
      {/* Lists */}
    </>
  );

  return (
    <div className="md:w-[12vw] flex p-2 md:py-8 justify-center bg-gray-200 h-full relative">
      {/* Mobile Sidebar - Section */}
      <div className="md:hidden">
        <Sheet>
          {/* <FaBars className="w-6 h-6" /> */}
          <SheetTrigger>
            <MenuIcon className="hover:opacity-30 rounded-lg p-2" size={40} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              {/* Options */}
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar - Section */}
      <div className="hidden md:inline">{menuOptions}</div>
    </div>
  );
};

export default Sidebar;
