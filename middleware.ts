import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // biarkan login & register terbuka
  if (pathname.includes("/login") || pathname.includes("/register")) return NextResponse.next()

  if (pathname.startsWith("/dashboard")) {
    const isLogin = request.cookies.get("EDUCARE_LOGIN")?.value
    if (!isLogin) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}
