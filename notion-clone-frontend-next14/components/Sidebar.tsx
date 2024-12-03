"use client";

// react-firebase-hooks
import { useCollection } from "react-firebase-hooks/firestore";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NewDocumentButton from "./NewDocumentButton";
// import { FaBars } from "react-icons/fa6";
import { MenuIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import SidebarOptions from "./SidebarOptions";

// Interface for DocumentData
interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}

const Sidebar = () => {
  const { user } = useUser();

  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user?.emailAddresses[0].toString())
      )
  );

  useEffect(() => {
    if (!data) return;

    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;

        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }

        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
    console.log(grouped);
  }, [data]);

  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* Lists ... */}
      <div className="flex flex-col md:max-w-36 py-4 space-y-4">
        {groupedData.owner.length === 0 ? (
          <h2 className="text-gray-500 font-semibold text-sm">
            No documents found
          </h2>
        ) : (
          <>
            <h2 className="text-gray-500 font-semibold text-sm">Documents</h2>
            {groupedData.owner.map((doc) => (
              <SidebarOptions key={doc.id} href={`/doc/${doc.id}`} id={doc.id} />
            ))}
          </>
        )}
      </div>

      {/* Shared with me */}
      {/* Lists */}
    </>
  );

  return (
    // md:w-[25vw] lg:w-[18vw] xl:w-[14vw]
    <div className="md:w-[12vw] lg:justify-center flex md:py-8 px-4 justify-start bg-gray-200 h-full relative">
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
