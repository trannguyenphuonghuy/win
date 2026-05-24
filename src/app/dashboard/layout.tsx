import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { db } from "@/db";
import { Users } from "@/db/schema";
import { eq } from "drizzle-orm";

import StudentLayout from "@/components/layouts/StudentLayout";
import TeacherLayout from "@/components/layouts/TeacherLayout";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/dashboard/header/Header";

type Role = "student" | "teacher";

const layouts: Record<
  Role,
  React.ComponentType<{ children: React.ReactNode }>
> = {
  student: StudentLayout,
  teacher: TeacherLayout,
};

function DashboardWrapper({
  children,
  role,
  name,
  image,
  email,
}: {
  children: React.ReactNode;
  role: Role;
  name?: string | null;
  image?: string | null;
  email?: string | null;
}) {
  const Layout = layouts[role];

  return (
    <Layout>
      <div className="flex w-full">
        <Sidebar role={role} />

        <div className="w-full">
          <Header name={name} avatar={image} role={role} email={email} />
          <div className="p-5">{children}</div>
        </div>
      </div>
    </Layout>
  );
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/login");
  }

  const user = await db.query.Users.findFirst({
    where: eq(Users.email, session.user.email),
  });

  if (!user) {
    redirect("/login");
  }

  if (!user.isSetupDone) {
    redirect("/setup");
  }

  const role = user.role as Role;

  if (!["student", "teacher"].includes(role)) {
    redirect("/login");
  }

  return (
    <DashboardWrapper
      role={role}
      name={user.name}  
      email={user.email}
      image={session.user.image}
    >
      {children}
    </DashboardWrapper>
  );
}