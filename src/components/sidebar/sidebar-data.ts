import {
  Home,
  Settings,
  Users,
  FileText,
  BookOpenCheck,
  LucideIcon,
  BadgeCheckIcon,
  Library,
  Bookmark,
} from "lucide-react";

export type Role = "teacher" | "student";

export type SidebarItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  roles: Role[];
};

export const sidebarItems: SidebarItem[] = [
  {
    label: "Trang chủ",
    href: "/dashboard",
    icon: Home,
    roles: ["teacher", "student"],
  },
  {
    label: "Đề thi",
    href: "/dashboard/exams",
    icon: FileText,
    roles: ["student"],
  },
  {
    label: "Ôn tập",
    href: "/dashboard/study",
    icon: BookOpenCheck,
    roles: ["student"],
  },
    {
    label: "Điểm thi",
    href: "/dashboard/scores",
    icon: BadgeCheckIcon
    ,
    roles: ["student"],
  },
    {
    label: "Tư liệu học tập",
    href: "/dashboard/study-materials",
    icon: Library,
    roles: ["student"],
  },
      {
    label: "Tài liệu đã lưu",
    href: "/dashboard/saved-docx",
    icon: Bookmark,
    roles: ["student"],
  },
];