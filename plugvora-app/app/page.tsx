const addons = [
  {
    name: "EssentialsX",
    description: "أدوات أساسية لإدارة سيرفر Minecraft بسهولة.",
    version: "2.21.2",
    type: "Plugin",
  },
  {
    name: "BetterRTP",
    description: "تنقل عشوائي سريع وآمن للاعبين.",
    version: "3.6.13",
    type: "Plugin",
  },
  {
    name: "CombatLogX",
    description: "نظام متقدم لمنع الهروب أثناء القتال.",
    version: "11+",
    type: "Plugin",
  },
  {
    name: "LuckPerms",
    description: "إدارة الرتب والصلاحيات في السيرفر.",
    version: "5.4+",
    type: "Plugin",
  },
  {
    name: "Citizens",
    description: "إنشاء NPCs تفاعلية داخل عالم Minecraft.",
    version: "2.0.41",
    type: "Plugin",
  },
  {
    name: "Geyser",
    description: "السماح للاعبي Bedrock بالدخول إلى سيرفر Java.",
    version: "2.x",
    type: "Plugin",
  },
];

export default function AddonsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#070a0d] text-white"
    >
      {/* Header */}
      <header className="border-b border-white/10 bg-[#090c0f]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a
            href="/"
            className="text-2xl font-black tracking-tight text-emerald-400"
          >
            PlugVora
          </a>

          <a
            href="/"
            className="rounded-xl bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:bg-white/10"
          >
            الرئيسية
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 text-center">
        <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
          Minecraft Addons
        </span>

        <h1 className="mt-6 text-4xl font-black sm:text-6xl">
          كل الإضافات
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
          اكتشف أفضل إضافات Minecraft لسيرفرك، وتصفح الإصدارات
          والتفاصيل بسهولة.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <input
            type="text"
            placeholder="ابحث عن إضافة..."
            className="w-full rounded-2xl border border-white/10 bg-[#11161b] px-6 py-5 text-right text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500"
          />
        </div>
      </section>

      {/* Addons */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            جميع الإضافات
          </h2>

          <span className="text-sm text-gray-500">
            {addons.length} إضافات
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {addons.map((addon) => (
            <article
              key={addon.name}
              className="group rounded-3xl border border-white/10 bg-[#0d1217] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-[#10171c]"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl font-black text-emerald-400">
                  N
                </div>

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  {addon.type}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold transition group-hover:text-emerald-400">
                {addon.name}
              </h3>

              {/* Description */}
              <p className="mt-3 min-h-[52px] text-sm leading-7 text-gray-400">
                {addon.description}
              </p>

              {/* Version */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <p className="text-xs text-gray-600">
                    الإصدار
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-300">
                    {addon.version}
                  </p>
                </div>

                <a
                  href={`/addon/${encodeURIComponent(addon.name)}`}
                  className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-emerald-400"
                >
                  التفاصيل
                </a>
              </div>
            </article>
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