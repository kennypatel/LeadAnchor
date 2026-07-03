import Link from "next/link";
import { Suspense } from "react";
import { AuthForm } from "@/components/auth-form";
import { AuthShell } from "@/components/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell title="Welcome back" subtitle="Log in to recover missed leads and manage follow-up.">
      <Suspense>
        <AuthForm mode="login" />
      </Suspense>
      <p className="mt-5 text-sm text-anchor-steel">Need an account? <Link className="font-semibold text-anchor-blue" href="/signup">Sign up</Link></p>
      <p className="mt-2 text-sm text-anchor-steel"><Link className="font-semibold text-anchor-blue" href="/forgot-password">Forgot password?</Link></p>
    </AuthShell>
  );
}
