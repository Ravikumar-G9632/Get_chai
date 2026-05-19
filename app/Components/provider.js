"use client"
import React from "react"
import { SessionProvider } from "next-auth/react"
import { Navbar } from "./Navbar"

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
    </SessionProvider>
  )
}