'use client'
// Outer Imports
import { useTransition } from "react"

// Inner Imports
import { Button } from "./ui/button"
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";


const NewDocumentButton = () => {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleCreateNewDocument() {
    startTransition(async () => {
      let docId = await createNewDocument();

      router.push(`/doc/${docId}`)
    })
  }

  return (
    <Button onClick={handleCreateNewDocument} disabled={isPending}>{`${isPending ? "Creating..." : "New Document"}`}</Button>
  )
}

export default NewDocumentButton