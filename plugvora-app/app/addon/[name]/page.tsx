type PageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function AddonPage({ params }: PageProps) {
  const { name } = await params;
  const addonName = decodeURIComponent(name);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#070a0d] px-5 py-12 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm text-emerald-400 hover:text-emerald-300"
        >
          ← العودة إلى الإضافات
        </a>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-emerald-500/10 text-6xl">
            ⛏️
          </div>

          <h1 className="mt-8 text-4xl font-black">
            {addonName}
          </h1>

          <p className="mt-4 leading-8 text-gray-400">
            إضافة Minecraft متوفرة على PlugVora.
            اكتشف التفاصيل والإصدار والتوافق مع السيرفر.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm text-gray-500">الإصدار</p>
              <p className="mt-2 font-bold">1.0.0</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm text-gray-500">Minecraft</p>
              <p className="mt-2 font-bold">1.21+</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-sm text-gray-500">النوع</p>
              <p className="mt-2 font-bold">Plugin</p>
            </div>
          </div>

          <a
            href="/"
            className="mt-8 block w-full rounded-2xl bg-emerald-500 py-4 text-center font-black text-black transition hover:bg-emerald-400"
          >
            ⬇️ تحميل الإضافة
          </a>
        </div>
      </div>
    </main>
  );
}
