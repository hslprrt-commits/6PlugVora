"use client";

import Link from "next/link";
import { useState } from "react";

const addons = [
  {
    name: "EssentialsX",
    description: "أدوات أساسية لإدارة سيرفر Minecraft بسهولة.",
    version: "1.21",
    category: "Management",
  },
  {
    name: "LuckPerms",
    description: "إدارة الرتب والصلاحيات بشكل احترافي.",
    version: "1.21",
    category: "Permissions",
  },
  {
    name: "Geyser",
    description: "السماح للاعبي Bedrock بالدخول إلى سيرفر Java.",
    version: "1.21",
    category: "Crossplay",
  },
  {
    name: "WorldEdit",
    description: "أداة قوية لبناء وتعديل العوالم بسرعة.",
    version: "1.21",
    category: "Building",
  },
  {
    name: "BetterRTP",
    description: "نظام انتقال عشوائي للاعبين داخل العالم.",
    version: "1.21",
    category: "Teleport",
  },
];

export default function AddonsPage() {
  const [search, setSearch] = useState("");

  const filteredAddons = addons.filter((addon) =>
    addon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#08090d] text-white"
    >
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0d12]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight"
          >
            <span className="text-red-500">Plug</span>
            <span>Vora</span>
          </Link>

          <nav className="hidden gap-6 text-sm text-gray-400 sm:flex">
            <Link href="/" className="transition hover:text-white">
              الرئيسية
            </Link>

            <Link
              href="/addons"
              className="text-white"
            >
              الإضافات
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-14">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/10 via-[#10131b] to-[#10131b] p-8 sm:p-12">
          <p className="mb-3 text-sm font-bold text-red-400">
            PLUGVORA ADDONS
          </p>

          <h1 className="text-4xl font-black sm:text-5xl">
            إضافات Minecraft
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            اكتشف إضافات Minecraft ورتّب سيرفرك بالطريقة التي تريدها.
          </p>

          {/* Search */}
          <div className="mt-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن إضافة..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none placeholder:text-gray-600 transition focus:border-red-500/50"
            />
          </div>
        </div>
      </section>

      {/* Addons */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black">
            جميع الإضافات
          </h2>

          <span className="text-sm text-gray-500">
            {filteredAddons.length} إضافة
          </span>
        </div>

        {filteredAddons.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-gray-400">
              ماكو إضافة بهذا الاسم.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAddons.map((addon) => (
              <Link
                key={addon.name}
                href={`/addon/${encodeURIComponent(addon.name)}`}
                className="group rounded-2xl border border-white/10 bg-[#10131a] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#141720]"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl font-black text-red-400">
                    P
                  </div>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                    {addon.version}
                  </span>
                </div>

                <h3 className="text-xl font-bold transition group-hover:text-red-400">
                  {addon.name}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                  {addon.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-gray-500">
                    {addon.category}
                  </span>

                  <span className="text-sm font-bold text-red-400">
                    عرض التفاصيل ←
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-600">
        © 2026 PlugVora — Minecraft Addons
      </footer>
    </main>
  );
}