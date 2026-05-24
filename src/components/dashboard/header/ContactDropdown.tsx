import {  Mail } from "lucide-react";

type ContactDropdownProps = {
  open: boolean;
};

export default function ContactDropdown({
  open,
}: ContactDropdownProps) {
  if (!open) return null;

  return (
    <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-md border border-border-soft bg-background shadow-xl">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition hover:bg-white/[0.04]"
      >
        <Mail className="size-4" />

        <span>Facebook</span>
      </a>

      <a
        href="mailto:support@finter.vn"
        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition hover:bg-white/[0.04]"
      >
        <Mail className="size-4" />

        <span>Email hỗ trợ</span>
      </a>
    </div>
  );
}