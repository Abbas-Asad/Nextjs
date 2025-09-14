import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware executed!");

  const checkAuth = req.cookies.get("checkauth"); // Get the cookie value
  console.log("checkauth value:", checkAuth);

  if (checkAuth === "0") {
    console.log("Redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Allow request to continue
}

// Apply middleware to all routes for testing
export const config = {
  matcher: "/:path*", // Apply middleware to all pages
};
