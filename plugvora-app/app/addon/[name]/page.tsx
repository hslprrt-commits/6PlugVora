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
      className="min-h-screen bg-[#070a0d] text-white px-5 py-10"
    >
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-block rounded-xl bg-[#15191d] px-5 py-3 text-gray-300 hover:bg-[#1d2328]"
        >
          ← العودة للرئيسية
        </a>

        <div className="rounded-3xl border border-[#20262c] bg-[#0d1115] p-8">
          <div className="mb-6">
            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              Minecraft Addon
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-emerald-400">
            {addonName}
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-400">
            صفحة تفاصيل الإضافة. هنا راح نضيف معلومات الإضافة، الإصدار،
            الوصف، التحميل، ومتطلبات التشغيل.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#151a1f] p-5">
              <p className="text-sm text-gray-500">النوع</p>
              <p className="mt-2 font-semibold">Plugin</p>
            </div>

            <div className="rounded-2xl bg-[#151a1f] p-5">
              <p className="text-sm text-gray-500">الإصدار</p>
              <p className="mt-2 font-semibold">1.0.0</p>
            </div>
          </div>

          <button className="mt-8 w-full rounded-2xl bg-emerald-500 px-6 py-4 font-bold text-black transition hover:bg-emerald-400">
            تحميل الإضافة
          </button>
        </div>
      </div>
    </main>
  );
}