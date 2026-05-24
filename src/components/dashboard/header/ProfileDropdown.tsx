"use client";

import { LogOut, Settings, User } from "lucide-react";
import { signOut } from "next-auth/react";

import DropdownItem from "@/components/dashboard/header/DropdownItem";

type ProfileDropdownProps = {
  name?: string | null;
  role?: "student" | "teacher" | null;
  email?: string | null;
};

export default function ProfileDropdown({
  email,
  name,
  role,
}: ProfileDropdownProps) {
  const roleLabel = role === "student" ? "Học sinh" : "Giáo viên";

  return (
    <div className="absolute right-0 mt-2 w-60 overflow-hidden rounded-md border border-border-soft bg-background">
      {/* HEADER */}
      <div className="border-b border-border-soft px-4 py-4">
        <div className="flex items-center justify-between mb-2">
          <p className="truncate text-sm font-semibold text-foreground">{name}</p>
          <p className="mt-1 text-xs text-green">{roleLabel}</p>
        </div>

        <p className="mt-1 text-xs text-text-2">{email}</p>
      </div>

      {/* MENU */}
      <div className="p-1.5 space-y-1.5">
        <DropdownItem icon={User} label="Thông tin tài khoản" />

        <DropdownItem icon={Settings} label="Thiết lập" />
      </div>

      {/* LOGOUT */}
      <div className="border-t border-border-soft p-1.5">
        <DropdownItem
          icon={LogOut}
          label="Đăng xuất"
          danger
          onClick={() =>
            signOut({
              callbackUrl: "/login",
            })
          }
        />
      </div>
    </div>
  );
}
