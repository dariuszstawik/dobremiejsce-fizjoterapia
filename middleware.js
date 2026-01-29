import { NextResponse } from "next/server";

export function middleware(request) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  if (isMaintenanceMode) {
    // Pomijamy pliki statyczne, API i samą stronę komunikatu
    const isPublicFile =
      pathname.includes(".") || pathname.startsWith("/_next");
    const isApiRoute = pathname.startsWith("/api");
    const isMaintenancePage = pathname === "/maintenance";

    if (!isPublicFile && !isApiRoute && !isMaintenancePage) {
      // Wykonujemy "rewrite" na stronę /maintenance
      const response = NextResponse.rewrite(
        new URL("/maintenance", request.url),
      );

      // Ustawiamy status 503 (Service Unavailable)
      // Uwaga: Next.js pozwala na modyfikację statusu w ten sposób:
      return new NextResponse(response.body, {
        status: 503,
        headers: {
          ...Object.fromEntries(response.headers),
          "Retry-After": "14400", // Spróbuj ponownie za godzinę (w sekundach)
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
