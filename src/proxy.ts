

// import { auth } from "@/auth";
// import { NextResponse } from "next/server";

// export default auth((req) => {
//   const isLoggedIn = !!req.auth;
//   const isSetupDone = req.auth?.user?.isSetupDone;

//   const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
//   const isSetup = req.nextUrl.pathname.startsWith("/setup");

//   if (isLoggedIn && !isSetupDone && !isSetup) {
//     return NextResponse.redirect(new URL("/setup", req.url));
//   }

//   if (isLoggedIn && isSetupDone && isSetup) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/dashboard/:path*", "/setup/:path*"],
// };

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const isSetupDone =
    req.auth?.user?.isSetupDone;

  const isDashboard =
    req.nextUrl.pathname.startsWith("/dashboard");

  const isSetup =
    req.nextUrl.pathname.startsWith("/setup");

  // chưa login
  if (!isLoggedIn && (isDashboard || isSetup)) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  // login nhưng chưa setup
  if (isLoggedIn && !isSetupDone && !isSetup) {
    return NextResponse.redirect(
      new URL("/setup", req.url)
    );
  }

  // login + setup rồi mà vào setup
  if (isLoggedIn && isSetupDone && isSetup) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/setup/:path*"],
};