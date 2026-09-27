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
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#070a0d] text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

          <div>
            <h1 className="text-2xl font-black text-emerald-400">
              PlugVora
            </h1>

            <p className="text-xs text-gray-500">
              Minecraft Addons
            </p>
          </div>

          <a
            href="#addons"
            className="rounded-xl bg-white/5 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
          >
            الإضافات
          </a>

        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center">

        <p className="mb-4 text-sm font-bold text-emerald-400">
          منصة إضافات Minecraft
        </p>

        <h2 className="text-5xl font-black leading-tight sm:text-6xl">
          كل إضافاتك
          <br />

          <span className="text-emerald-400">
            في مكان واحد
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          اكتشف إضافات Minecraft، تصفح تفاصيلها،
          واعثر على الأدوات المناسبة لسيرفرك.
        </p>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">

          <input
            type="text"
            placeholder="ابحث عن إضافة..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none placeholder:text-gray-600 focus:border-emerald-500"
          />

        </div>

      </section>

      {/* Addons */}
      <section
        id="addons"
        className="mx-auto max-w-6xl px-5 pb-20"
      >

        <div className="mb-8">
          <h3 className="text-3xl font-black">
            أحدث الإضافات
          </h3>

          <p className="mt-2 text-gray-500">
            إضافات مختارة لـ Minecraft
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {addons.map((addon) => (
            <a
              key={addon.name}
              href={`/addon/${encodeURIComponent(addon.name)}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white/[0.06]"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl">
                ⛏️
              </div>

              <h4 className="mt-6 text-xl font-black transition group-hover:text-emerald-400">
                {addon.name}
              </h4>

              <p className="mt-3 min-h-14 text-sm leading-7 text-gray-500">
                {addon.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">

                <span className="text-gray-500">
                  الإصدار {addon.version}
                </span>

                <span className="rounded-lg bg-emerald-500/10 px-3 py-1 font-bold text-emerald-400">
                  {addon.type}
                </span>

              </div>

            </a>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-gray-600">
        © 2026 PlugVora — Minecraft Addons Platform
      </footer>

    </main>
  );
}