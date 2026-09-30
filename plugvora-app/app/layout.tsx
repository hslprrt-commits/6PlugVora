import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlugVora",
  description: "منصة إضافات ماينكرافت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-[#08090d] text-white">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

            {/* Logo */}
            <a
              href="/"
              className="text-3xl font-black tracking-tight"
            >
              <span className="text-red-500">Plug</span>
              <span className="text-white">Vora</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-2 md:flex">

              <a
                href="/"
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                🏠 الرئيسية
              </a>

              <a
                href="/addons"
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                🧩 الإضافات
              </a>

              <a
                href="/account"
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                👤 الحساب
              </a>

              <a
                href="/help"
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                🆘 مركز المساعدة
              </a>

            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xl text-white transition hover:bg-white/10 md:hidden"
              aria-label="فتح القائمة"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");

                if (menu) {
                  menu.classList.toggle("hidden");
                }
              }}
            >
              ☰
            </button>

          </div>

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            className="hidden border-t border-white/10 bg-[#08090d] px-4 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-2">

              <a
                href="/"
                className="rounded-xl px-4 py-3 text-right text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                🏠 الرئيسية
              </a>

              <a
                href="/addons"
                className="rounded-xl px-4 py-3 text-right text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                🧩 الإضافات
              </a>

              <a
                href="/account"
                className="rounded-xl px-4 py-3 text-right text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                👤 الحساب
              </a>

              <a
                href="/help"
                className="rounded-xl px-4 py-3 text-right text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                🆘 مركز المساعدة
              </a>

            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}