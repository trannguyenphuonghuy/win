type NotificationDropdownProps = {
  open: boolean;
};

export default function NotificationDropdown({
  open,
}: NotificationDropdownProps) {
  if (!open) return null;

  return (
    <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-md border border-border-soft bg-background">
      <div className="border-b border-border-soft px-4 py-3">
        <p className="text-sm font-semibold text-foreground">
          Thông báo
        </p>
      </div>

      <div className="py-1">
        <div className="cursor-pointer px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.04]">
          📌 Bạn có bài kiểm tra mới
        </div>

        <div className="cursor-pointer px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.04]">
          📊 Điểm của bạn đã được cập nhật
        </div>

        <div className="cursor-pointer px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.04]">
          🎯 Nhắc nhở: Ôn tập hôm nay
        </div>
      </div>
    </div>
  );
}