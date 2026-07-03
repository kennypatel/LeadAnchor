"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui";
import { createClient } from "@/lib/supabase/client";

export function AuthForm({ mode }: { mode: "login" | "signup" | "forgot" }) {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const supabase = createClient();
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email);
        if (error) throw error;
        setMessage("Password reset email sent.");
      } else if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } }
        });
        if (error) throw error;
        router.push("/dashboard");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push(params.get("next") ?? "/dashboard");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      {mode === "signup" && (
        <label className="grid gap-2 text-sm font-medium text-anchor-ink">
          Full name
          <input className="h-11 rounded-lg border border-anchor-line px-3 outline-none focus:border-anchor-blue" value={fullName} onChange={(event) => setFullName(event.target.value)} />
        </label>
      )}
      <label className="grid gap-2 text-sm font-medium text-anchor-ink">
        Email
        <input className="h-11 rounded-lg border border-anchor-line px-3 outline-none focus:border-anchor-blue" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      {mode !== "forgot" && (
        <label className="grid gap-2 text-sm font-medium text-anchor-ink">
          Password
          <input className="h-11 rounded-lg border border-anchor-line px-3 outline-none focus:border-anchor-blue" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
      )}
      <Button type="submit" disabled={loading}>{loading ? "Working..." : mode === "login" ? "Log in" : mode === "signup" ? "Create account" : "Send reset link"}</Button>
      {message && <p className="text-sm text-anchor-steel">{message}</p>}
    </form>
  );
}
