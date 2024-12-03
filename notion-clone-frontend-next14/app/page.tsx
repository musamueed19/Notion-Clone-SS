import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex space-x-2 animate-pulse items-center">
      <ArrowLeftCircle className="w-12 h-12" />
      <h1 className="font-bold">Get started with creating a New Document</h1>
   </main>
  );
}
