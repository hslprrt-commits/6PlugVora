import { supabase } from "@/lib/supabase";

export default async function TestSupabase() {
  const { data, error } = await supabase
    .from("plugins")
    .select("*")
    .limit(1);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">Supabase Test</h1>

      {error ? (
        <pre className="mt-5 text-red-500">
          {error.message}
        </pre>
      ) : (
        <pre className="mt-5">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </main>
  );
}
