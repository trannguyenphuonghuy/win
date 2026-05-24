"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

import SidebarItem from "./sidebar-item";
import { Role, sidebarItems } from "./sidebar-data";

import { useSidebar } from "@/store/hooks/useSidebar";

type SidebarProps = {
  role: Role;
};

export default function Sidebar({ role }: SidebarProps) {
  const { expanded, mobileOpen, toggleExpanded, closeMobile } =
    useSidebar();

  const filteredItems = sidebarItems.filter((item) =>
    item.roles.includes(role)
  );

  return (
    <>
      {/* BACKDROP MOBILE */}
      {mobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* MOBILE */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-72 bg-zinc-900
          transform transition-transform duration-300 md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h2 className="text-lg font-semibold text-white">FINTER</h2>

          <button
            onClick={closeMobile}
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-3">
          {filteredItems.map((item) => (
            <SidebarItem
              key={item.href}
              item={item}
              expanded={true}
              onClick={closeMobile}
            />
          ))}
        </nav>
      </aside>

      {/* DESKTOP */}
      <aside
        className={`
          hidden md:block h-screen overflow-hidden
          border-r border-white/10 bg-zinc-900
          transition-all duration-300
          ${expanded ? "w-64" : "w-20"}
        `}
      >
        <div className="flex h-full flex-col">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <h2 className="whitespace-nowrap text-lg font-semibold text-white">
                FINTER
              </h2>
            </div>

            <button
              onClick={toggleExpanded}
              className="rounded-lg p-2 text-accent hover:bg-white/10"
            >
              {expanded ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          </div>

          {/* NAV */}
          <nav className="flex flex-1 flex-col gap-2 p-3">
            {filteredItems.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
                expanded={expanded}
              />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}