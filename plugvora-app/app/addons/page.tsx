import Link from "next/link";

type Addon = {
  description: string;
  version: string;
  category: string;
  author: string;
  downloads: string;
};

const addons: Record<string, Addon> = {
  EssentialsX: {
    description:
      "مجموعة أدوات أساسية لإدارة سيرفر Minecraft وإضافة أوامر ومميزات مهمة.",
    version: "2.22.0",
    category: "Management",
    author: "EssentialsX Team",
    downloads: "10M+",
  },

  LuckPerms: {
    description:
      "نظام احترافي لإدارة الرتب والصلاحيات داخل سيرفر Minecraft.",
    version: "1.21",
    category: "Permissions",
    author: "LuckPerms",
    downloads: "20M+",
  },

  Geyser: {
    description:
      "يسمح للاعبي Minecraft Bedrock بالدخول إلى سيرفر Minecraft Java.",
    version: "1.21",
    category: "Crossplay",
    author: "GeyserMC",
    downloads: "15M+",
  },

  WorldEdit: {
    description:
      "أداة قوية لبناء وتعديل الخرائط والعوالم بسرعة وسهولة.",
    version: "1.21",
    category: "Building",
    author: "EngineHub",
    downloads: "50M+",
  },

  BetterRTP: {
    description:
      "إضافة للانتقال العشوائي إلى أماكن آمنة داخل عالم Minecraft.",
    version: "1.21",
    category: "Teleport",
    author: "BetterRTP",
    downloads: "5M+",
  },
};

export default function AddonsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#08090d] text-white"
    >
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0b0d12]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link
            href="/"
            className="text-2xl font-black"
          >
            <span className="text-red-500">Plug</span>
            <span>Vora</span>
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            الرئيسية
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold text-red-400">
            PlugVora
          </p>

          <h1 className="text-4xl font-black sm:text-5xl">
            إضافات ماينكرافت
          </h1>

          <p className="mt-4 max-w-2xl leading-8 text-gray-400">
            تصفح إضافات Minecraft المتوفرة على PlugVora
            واختر الإضافة التي تريد معرفة تفاصيلها.
          </p>
        </div>

        {/* Addons Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(addons).map(([name, addon]) => (
            <Link
              key={name}
              href={`/addon/${encodeURIComponent(name)}`}
              className="group rounded-3xl border border-white/10 bg-[#10131a] p-6 transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-[#12161e]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-2xl font-black text-red-400">
                  P
                </div>

                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
                  {addon.category}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black transition group-hover:text-red-400">
                {name}
              </h2>

              <p className="mt-3 min-h-[72px] leading-7 text-gray-400">
                {addon.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-black/20 p-3">
                  <p className="text-xs text-gray-600">
                    الإصدار
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    {addon.version}
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/20 p-3">
                  <p className="text-xs text-gray-600">
                    التحميلات
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    {addon.downloads}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  المطور: {addon.author}
                </span>

                <span className="font-bold text-red-400 transition group-hover:translate-x-[-4px]">
                  التفاصيل ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-600">
        © 2026 PlugVora — Minecraft Addons
      </footer>
    </main>
  );
}