"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { SidebarItem as SidebarItemType } from "./sidebar-data";

type SidebarItemProps = {
  item: SidebarItemType;
  expanded: boolean;
  onClick?: () => void;
};

export default function SidebarItem({
  item,
  expanded,
}: SidebarItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === item.href;

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`flex items-center rounded-md h-8 transition-all duration-300
      ${
        expanded
          ? "justify-start gap-3 px-2"
          : "justify-center px-0 h-11"
      }
      ${
        isActive
          ? "bg-accent-s text-accent hover:bg-accent-h"
          : "text-zinc-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      <Icon
        size={22}
        className="min-w-4"
      />

      <div
        className={`overflow-hidden transition-all duration-300
        ${
          expanded
            ? "w-40 opacity-100 delay-150"
            : "w-0 opacity-0"
        }`}
      >
        <span className="whitespace-nowrap text-[12px] font-medium">
          {item.label}
        </span>
      </div>
    </Link>
  );
}