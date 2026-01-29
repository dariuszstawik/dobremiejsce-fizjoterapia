import { NextResponse } from "next/server";

export function middleware(request) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  if (isMaintenanceMode) {
    const isPublicFile =
      pathname.includes(".") || pathname.startsWith("/_next");
    const isApiRoute = pathname.startsWith("/api");
    const isMaintenancePage = pathname === "/maintenance";

    if (!isPublicFile && !isApiRoute && !isMaintenancePage) {
      // Tworzymy URL do strony /maintenance
      const url = request.nextUrl.clone();
      url.pathname = "/maintenance";

      // Zwracamy rewrite, ale w nowej odpowiedzi wymuszamy status 503
      return new NextResponse(null, {
        status: 503,
        headers: {
          "x-middleware-rewrite": url.toString(),
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
