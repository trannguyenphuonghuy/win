"use client";

import { useEffect, useRef } from "react";
import { Bell, Globe, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ProfileDropdown from "@/components/dashboard/header/ProfileDropdown";
import ContactDropdown from "@/components/dashboard/header/ContactDropdown";
import NotificationDropdown from "@/components/dashboard/header/NotificationDropdown";
import { Button } from "@/components/ui/button";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import {
  toggleProfile,
  toggleNoti,
  closeAll,
  toggleContact,
} from "@/store/ui/headerSlice";

import { useSidebar } from "@/store/hooks/useSidebar";

type HeaderProps = {
  name?: string | null;
  avatar?: string | null;
  role?: "student" | "teacher";
  email?: string | null;
};

export default function Header({ name, avatar, role, email }: HeaderProps) {
  const dispatch = useAppDispatch();

  const { toggleMobile } = useSidebar();

  const { profileOpen, notiOpen, contactOpen } = useAppSelector(
    (state) => state.header,
  );

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        dispatch(closeAll());
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <header
      ref={headerRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(closeAll());
        }
      }}
      className="sticky top-0 z-40 flex h-18 w-full items-center justify-between border-b border-border-soft bg-background px-4"
    >
      {/* LEFT */}
      <div
        className="flex items-center gap-3"
        onClick={() => dispatch(closeAll())}
      >
        <Button
          variant="iconButton"
          size="iconButton"
          onClick={(e) => {
            e.stopPropagation();
            toggleMobile();
          }}
          className="text-foreground md:hidden"
        >
          <Menu size={18} />
        </Button>

        <div className="flex flex-col">
          <h1 className="text-[14px] font-semibold tracking-wide text-foreground">
            TRUNG TAM HOC LIEU GDĐP - HA HUY TAP
          </h1>
          <Breadcrumbs />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Button
            variant="iconButton"
            size="iconButton"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleContact());
            }}
          >
            <Globe className="size-4.5 text-text-1" />
          </Button>

          <ContactDropdown open={contactOpen} />
        </div>

        {/* NOTIFICATION */}
        <div className="relative">
          <Button
            variant="iconButton"
            size="iconButton"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleNoti());
            }}
            className="relative"
          >
            <Bell className="size-4.5 text-text-1" />

            <span className="absolute right-2 top-3 size-2 rounded-full bg-red ring-2 ring-zinc-950" />
          </Button>

          <NotificationDropdown open={notiOpen} />
        </div>

        {/* PROFILE */}
        <div className="relative size-9">
          <Button
            variant="iconButton"
            size="iconButton"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleProfile());
            }}
          >
            <Image
              src={
                avatar ||
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600"
              }
              alt="avatar"
              fill
              className="size-9 rounded-md object-cover"
            />
          </Button>

          {profileOpen && (
            <ProfileDropdown name={name} email={email} role={role} />
          )}
        </div>
      </div>
    </header>
  );
}

function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return (
      <Link
        href="/"
        className="text-[13px] font-semibold tracking-wide text-text-1 transition hover:text-primary"
      >
        Dashboard
      </Link>
    );
  }

  return (
    <div className="md:flex hidden items-center gap-1 text-[15px] font-semibold tracking-wide">
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");

        const isLast = index === segments.length - 1;

        return (
          <div key={href} className="flex items-center gap-1">
            <Link
              href={href}
              className={`capitalize transition ${
                isLast
                  ? "text-text-1"
                  : "text-text-2 hover:text-primary"
              }`}
            >
              {segment.replace(/-/g, " ")}
            </Link>

            {!isLast && (
              <span className="text-text-3">/</span>
            )}
          </div>
        );
      })}
    </div>
  );
}