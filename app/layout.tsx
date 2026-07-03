import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadAnchor | Missed lead recovery",
  description:
    "Recover missed calls, form fills, texts, and inquiries with instant lead response and owner-friendly follow-up."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
