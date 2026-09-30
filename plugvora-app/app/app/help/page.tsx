export default function HelpPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#08090d] px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black">🆘 مركز المساعدة</h1>

        <p className="mt-4 text-gray-400">
          هنا راح تلقى المساعدة والشروحات الخاصة بـ PlugVora.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold">📥 تحميل الإضافات</h2>
            <p className="mt-2 text-gray-400">
              شرح طريقة تحميل وتثبيت إضافات Minecraft.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-xl font-bold">❓ الأسئلة الشائعة</h2>
            <p className="mt-2 text-gray-400">
              إجابات على المشاكل والأسئلة الشائعة.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}