import { auth } from "@/auth";
import { db } from "@/db";
import { Users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { name, phone, grade } = await req.json();

  await db
    .update(Users)
    .set({
      name,
      phone,
      grade,
      isSetupDone: true,
    })
    .where(eq(Users.email, session.user.email));

  return Response.json({ ok: true });
}