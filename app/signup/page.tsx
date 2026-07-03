import Link from "next/link";
import { Suspense } from "react";
import { AuthForm } from "@/components/auth-form";
import { AuthShell } from "@/components/auth-shell";

export default function SignupPage() {
  return (
    <AuthShell title="Start your missed lead audit" subtitle="Create your workspace and connect your first lead source.">
      <Suspense>
        <AuthForm mode="signup" />
      </Suspense>
      <p className="mt-5 text-sm text-anchor-steel">Already have an account? <Link className="font-semibold text-anchor-blue" href="/login">Log in</Link></p>
    </AuthShell>
  );
}
