"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated" && session?.user?.username) {
      router.replace(`/${session.user.username}`)
    }
    // If somehow no username, fall back to home
    if (status === "authenticated" && !session?.user?.username) {
      router.replace("/")
    }
  }, [status, session, router])

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        Loading...
      </div>
    )
  }

  return null
}