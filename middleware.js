import { NextResponse } from "next/server";

export function middleware(request) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  // Wyjątki dla plików statycznych i obrazów
  const isPublicFile = pathname.includes(".") || pathname.startsWith("/_next");

  if (isMaintenanceMode && !isPublicFile) {
    // Zwracamy czysty HTML bezpośrednio, co gwarantuje status 503
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="pl">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Strona w budowie</title>
        </head>
        <body class="bg-gray-50 flex items-center justify-center min-h-screen px-4">
          <div class="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-xl shadow-lg border border-gray-100">
            <div class="text-6xl">🛠️</div>
            <h1 class="text-3xl font-bold text-gray-900 tracking-tight">Strona w budowie</h1>
            <p class="text-gray-600 text-lg">
              Zapraszamy wkrótce!<br>
              <span class="font-semibold text-gray-800">Tel. 577 611 464</span>
            </p>
            <div class="pt-4">
              <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-orange-300 w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        </body>
      </html>
      `,
      {
        status: 503,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "Retry-After": "14400", // Sugestia dla Google, by wróciło za godzinę
        },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
