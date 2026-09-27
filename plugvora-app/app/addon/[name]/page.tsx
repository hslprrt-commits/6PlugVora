import Link from "next/link";

type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

const addons: Record<
  string,
  {
    description: string;
    version: string;
    category: string;
    author: string;
    downloads: string;
  }
> = {
  EssentialsX: {
    description:
      "مجموعة أدوات أساسية لإدارة سيرفر Minecraft وإضافة أوامر ومميزات مهمة.",
    version: "1.21",
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

export default async function AddonPage({ params }: PageProps) {
  const { name } = await params;

  const addonName = decodeURIComponent(name);

  const addon = addons[addonName];

  if (!addon) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#08090d] px-5 text-white"
      >
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#10131a] p-10 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10 text-3xl font-black text-red-400">
            ?
          </div>

          <h1 className="mt-6 text-3xl font-black">
            الإضافة غير موجودة
          </h1>

          <p className="mt-3 text-gray-500">
            ما لكينا إضافة باسم:
          </p>

          <p className="mt-2 font-bold text-red-400">
            {addonName}
          </p>

          <Link
            href="/addons"
            className="mt-8 inline-block rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
          >
            العودة إلى الإضافات
          </Link>
        </div>
      </main>
    );
  }

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
            href="/addons"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← كل الإضافات
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        {/* Addon Header */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/10 via-[#10131a] to-[#10131a] p-7 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-red-500/10 text-4xl font-black text-red-400">
              P
            </div>

            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400">
                  {addon.category}
                </span>

                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Minecraft {addon.version}
                </span>
              </div>

              <h1 className="text-4xl font-black">
                {addonName}
              </h1>

              <p className="mt-3 text-gray-400">
                {addon.description}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
              <p className="text-xs text-gray-600">
                الإصدار
              </p>
              <p className="mt-1 font-bold">
                {addon.version}
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
              <p className="text-xs text-gray-600">
                التصنيف
              </p>
              <p className="mt-1 font-bold">
                {addon.category}
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
              <p className="text-xs text-gray-600">
                المطور
              </p>
              <p className="mt-1 truncate font-bold">
                {addon.author}
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
              <p className="text-xs text-gray-600">
                التحميلات
              </p>
              <p className="mt-1 font-bold">
                {addon.downloads}
              </p>
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#10131a] p-7">
          <h2 className="text-2xl font-black">
            تحميل الإضافة
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            حمّل أحدث إصدار متوافق مع Minecraft {addon.version}.
          </p>

          <button
            type="button"
            className="mt-6 w-full rounded-2xl bg-red-500 px-6 py-4 font-black text-white transition hover:bg-red-600"
          >
            تحميل {addonName}
          </button>

          <p className="mt-3 text-center text-xs text-gray-600">
            رابط التحميل سيتم ربطه لاحقًا بملف الإضافة الحقيقي.
          </p>
        </div>

        {/* Description */}
        <div className="mt-6 rounded-3xl border border-white/10 bg-[#10131a] p-7">
          <h2 className="text-2xl font-black">
            عن الإضافة
          </h2>

          <p className="mt-4 leading-8 text-gray-400">
            {addon.description}
          </p>

          <p className="mt-4 leading-8 text-gray-400">
            يمكنك استخدام هذه الصفحة لعرض معلومات الإضافة،
            الإصدار، المطور، التحميلات، وروابط التحميل.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-600">
        © 2026 PlugVora — Minecraft Addons
      </footer>
    </main>
  );
}