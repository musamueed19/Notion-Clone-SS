'use client'

import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createDocument } from "@/actions/actions";

export default function NewDocumentButton() {

  const [isPending, createTransition] = useTransition();
  const router = useRouter();

  function handleCreateNewDocument() {
    createTransition(async () => {
      const docId = await createDocument();
      router.push(`/doc/${docId}`);
    })
  }

  return (
      <div>
          <Button onClick={handleCreateNewDocument} disabled={isPending}>{`${isPending ? "Creating..." : "New Document"}`}</Button>
    </div>
  )
}
