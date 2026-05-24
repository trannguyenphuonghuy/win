import React from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-white">Dashboard</h2>
        <p className="text-sm text-zinc-400">
          Khu vực tổng quan cho student/teacher.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <p className="text-xs font-medium text-zinc-400">Bài tập hôm nay</p>
          <p className="mt-2 text-2xl font-semibold text-white">12</p>
          <p className="mt-2 text-xs text-zinc-400">+3 so với hôm qua</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <p className="text-xs font-medium text-zinc-400">Thông báo</p>
          <p className="mt-2 text-2xl font-semibold text-white">5</p>
          <p className="mt-2 text-xs text-zinc-400">cần xử lý</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <p className="text-xs font-medium text-zinc-400">Tiến độ</p>
          <p className="mt-2 text-2xl font-semibold text-white">72%</p>
          <p className="mt-2 text-xs text-zinc-400">đang cải thiện</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <p className="text-xs font-medium text-zinc-400">Thời gian học</p>
          <p className="mt-2 text-2xl font-semibold text-white">6h 20m</p>
          <p className="mt-2 text-xs text-zinc-400">tuần này</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <section className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Hoạt động gần đây</h3>
            <span className="text-xs text-zinc-400">(placeholder)</span>
          </div>

          <div className="mt-4 space-y-3">
            {[
              {
                title: "Nộp bài: Toán 9",
                meta: "2 giờ trước",
              },
              {
                title: "Đã xem lớp học",
                meta: "Hôm qua",
              },
              {
                title: "Nhận phản hồi",
                meta: "3 ngày trước",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-zinc-400">{item.meta}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Lịch</h3>
            <span className="text-xs text-zinc-400">(placeholder)</span>
          </div>

          <div className="mt-4 space-y-3">
            {[
              { title: "Kiểm tra nhanh", meta: "Thứ 3 - 08:30" },
              { title: "Bài tập tuần", meta: "Thứ 5 - 19:00" },
              { title: "Họp lớp", meta: "CN - 10:00" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-zinc-400">{item.meta}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

