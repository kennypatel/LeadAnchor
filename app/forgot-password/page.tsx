import Link from "next/link";
import { Suspense } from "react";
import { AuthForm } from "@/components/auth-form";
import { AuthShell } from "@/components/auth-shell";

export default function ForgotPasswordPage() {
  return (
    <AuthShell title="Reset your password" subtitle="Send a reset link to the email on your LeadAnchor account.">
      <Suspense>
        <AuthForm mode="forgot" />
      </Suspense>
      <p className="mt-5 text-sm text-anchor-steel">Remembered it? <Link className="font-semibold text-anchor-blue" href="/login">Log in</Link></p>
    </AuthShell>
  );
}
