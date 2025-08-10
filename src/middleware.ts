import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if user is trying to access thank you page
  if (request.nextUrl.pathname === "/thank-you") {
    // Check if user has completed the order (has the completion cookie)
    const hasCompletedOrder = request.cookies.get("order-completed");

    if (!hasCompletedOrder) {
      // Redirect to home page if they haven't completed an order
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
