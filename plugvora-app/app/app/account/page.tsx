"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<"login" | "signup">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
      setLoading(false);
    }

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setMessage("");
    setBusy(true);

    if (!email || !password) {
      setError("اكتب البريد الإلكتروني وكلمة المرور.");
      setBusy(false);
      return;
    }

    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data.user && !data.session) {
        setMessage(
          "تم إنشاء الحساب. افحص بريدك الإلكتروني لتأكيد الحساب."
        );
      } else {
        setMessage("تم إنشاء الحساب وتسجيل الدخول بنجاح.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      } else {
        setMessage("تم تسجيل الدخول بنجاح.");
      }
    }

    setBusy(false);
  }

  async function handleLogout() {
    setBusy(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signOut();

    if (error) {
      setError(error.message);
    } else {
      setUser(null);
      setMessage("تم تسجيل الخروج.");
    }

    setBusy(false);
  }

  if (loading) {
    return (
      <main
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#08090d] text-white"
      >
        <p className="text-gray-400">جاري تحميل الحساب...</p>
      </main>
    );
  }

  if (user) {
    return (
      <main
        dir="rtl"
        className="min-h-screen bg-[#08090d] px-4 py-16 text-white"
      >
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-white/10 bg-[#10131a] p-8 shadow-2xl">
            <div className="mb-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-3xl">
                👤
              </div>

              <h1 className="text-3xl font-black">
                حسابي
              </h1>

              <p className="mt-2 text-gray-400">
                أهلاً بك في PlugVora
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-gray-500">
                البريد الإلكتروني
              </p>

              <p className="mt-2 break-all text-lg font-semibold">
                {user.email}
              </p>
            </div>

            {message && (
              <p className="mt-4 rounded-xl bg-green-500/10 p-4 text-green-400">
                {message}
              </p>
            )}

            {error && (
              <p className="mt-4 rounded-xl bg-red-500/10 p-4 text-red-400">
                {error}
              </p>
            )}

            <button
              onClick={handleLogout}
              disabled={busy}
              className="mt-6 w-full rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600 disabled:opacity-50"
            >
              {busy ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#08090d] px-4 py-16 text-white"
    >
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-white/10 bg-[#10131a] p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="text-4xl font-black">
              <span className="text-red-500">Plug</span>
              <span className="text-white">Vora</span>
            </div>

            <h1 className="mt-6 text-3xl font-black">
              {mode === "login"
                ? "تسجيل الدخول"
                : "إنشاء حساب"}
            </h1>

            <p className="mt-2 text-gray-400">
              {mode === "login"
                ? "سجل دخولك للمتابعة"
                : "أنشئ حسابك في PlugVora"}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-300">
                البريد الإلكتروني
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                كلمة المرور
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-red-500"
              />
            </div>

            {error && (
              <p className="rounded-xl bg-red-500/10 p-4 text-sm text-red-400">
                {error}
              </p>
            )}

            {message && (
              <p className="rounded-xl bg-green-500/10 p-4 text-sm text-green-400">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600 disabled:opacity-50"
            >
              {busy
                ? "جاري المعالجة..."
                : mode === "login"
                ? "تسجيل الدخول"
                : "إنشاء الحساب"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            {mode === "login"
              ? "ما عندك حساب؟"
              : "عندك حساب بالفعل؟"}

            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError("");
                setMessage("");
              }}
              className="mr-2 font-bold text-red-400 hover:text-red-300"
            >
              {mode === "login"
                ? "إنشاء حساب"
                : "تسجيل الدخول"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}