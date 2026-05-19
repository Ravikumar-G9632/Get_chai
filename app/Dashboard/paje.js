"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Dashboard() {
  const { data: session, status } = useSession()

  if (status === "loading") return <p>Loading...</p>

  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      <h1>Welcome to Dashboard 🎉</h1>
      <p>You are logged in as {session.user.email}</p>
    </div>
  )
}