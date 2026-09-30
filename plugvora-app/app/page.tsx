export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#08090d] text-white"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            <span className="text-red-500">Plug</span>
            <span className="text-white">Vora</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2">

            <a
              href="/"
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              🏠 الرئيسية
            </a>

            <a
              href="/addons"
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              🧩 الإضافات
            </a>

            <a
              href="/account"
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              👤 الحساب
            </a>

            <a
              href="/help"
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              🆘 مركز المساعدة
            </a>

          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6">

        <h1 className="text-4xl font-black sm:text-6xl">
          مرحباً بك في{" "}
          <span className="text-red-500">Plug</span>
          <span className="text-white">Vora</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          منصتك لتحميل واكتشاف أفضل إضافات Minecraft
        </p>

        <a
          href="/addons"
          className="mt-8 inline-block rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-500"
        >
          🧩 تصفح الإضافات
        </a>

      </section>
    </main>
  );
}