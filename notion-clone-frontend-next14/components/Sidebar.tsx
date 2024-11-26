'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NewDocumentButton from "./NewDocumentButton"
import { FaBars } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="md:w-[12vw] flex p-2 md:py-8 justify-center bg-gray-200 h-full relative">
      {/* Mobile Sidebar - Section */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger><FaBars className="w-6 h-6" /></SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar - Section */}
      <div className="hidden md:block">
        <NewDocumentButton />
      </div>
    </div>
  );
}

export default Sidebar