// import NextAuth from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;

//       isSetupDone?: boolean;
//       phone?: string | null;
//       grade?: number | null;
//     };
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     isSetupDone?: boolean;
//     phone?: string | null;
//     grade?: number | null;
//   }
// }

import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;

      role: "student" | "teacher";

      isSetupDone?: boolean;

      phone?: string | null;
      grade?: number | null;
    } & DefaultSession["user"];
  }

  interface User {
    role: "student" | "teacher";

    isSetupDone?: boolean;

    phone?: string | null;
    grade?: number | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "student" | "teacher";

    isSetupDone?: boolean;

    phone?: string | null;
    grade?: number | null;
  }
}