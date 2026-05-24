"use client";

import { LucideIcon } from "lucide-react";

type DropdownItemProps = {
  icon: LucideIcon;
  label: string;
  danger?: boolean;
  onClick?: () => void;
};

export default function DropdownItem({
  icon: Icon,
  label,
  danger,
  onClick,
}: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center text-left gap-2 px-2 py-2 text-[12px] transition
      ${
        danger
          ? "text-red-500 hover:bg-red-500/10"
          : "text-white hover:bg-zinc-800"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}