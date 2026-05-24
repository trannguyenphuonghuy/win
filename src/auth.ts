// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { db } from "@/db";
// import { Users } from "@/db/schema";
// import { eq } from "drizzle-orm";

// export const {
//   handlers,
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   session: { strategy: "jwt" },

//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],

//   callbacks: {
//     async signIn({ user }) {
//       const existing = await db.query.Users.findFirst({
//         where: eq(Users.email, user.email!),
//       });

//       if (!existing) {
//         await db.insert(Users).values({
//           email: user.email!,
//           name: user.name!,
//           isSetupDone: false,
//         });
//       }

//       return true;
//     },

//     async jwt({ token }) {
//       const dbUser = await db.query.Users.findFirst({
//         where: eq(Users.email, token.email!),
//       });

//       if (dbUser) {
//         token.isSetupDone = dbUser.isSetupDone;
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       session.user.isSetupDone = token.isSetupDone as boolean;
//       return session;
//     },
//   },
// });

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "@/db";
import { Users } from "@/db/schema";

import { eq } from "drizzle-orm";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        const existing =
          await db.query.Users.findFirst({
            where: eq(
              Users.email,
              user.email!
            ),
          });

        // user mới
        if (!existing) {
          await db.insert(Users).values({
            email: user.email!,
            name: user.name ?? "",
            image: user.image ?? null,

            // mặc định
            role: "student",

            isSetupDone: false,
          });
        }

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    },

    async jwt({ token }) {
      const dbUser =
        await db.query.Users.findFirst({
          where: eq(
            Users.email,
            token.email!
          ),
        });

      if (dbUser) {
        token.role = dbUser.role;

        token.isSetupDone =
          dbUser.isSetupDone;

        token.phone = dbUser.phone;

        token.grade = dbUser.grade;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role =
        token.role as
          | "student"
          | "teacher";

      session.user.isSetupDone =
        token.isSetupDone as boolean;

      session.user.phone =
        token.phone as string;

      session.user.grade =
        token.grade as number;

      return session;
    },
  },
});