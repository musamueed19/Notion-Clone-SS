"use server"

import { auth } from "@clerk/nextjs/server"

export async function createDocument() {
    auth.protect();

    
}