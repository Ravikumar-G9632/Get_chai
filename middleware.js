import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl

    // If user is logged in and tries to open home or login → send to dashboard
    if (token && (pathname === "/" || pathname === "/login")) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    // If user is NOT logged in and tries dashboard → send to login
    if (!token && pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
)

export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
}