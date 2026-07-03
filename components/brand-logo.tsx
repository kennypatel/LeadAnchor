import { clsx } from "clsx";
import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  showText?: boolean;
  tone?: "dark" | "light";
  variant?: "lockup" | "wordmark";
};

export function BrandLogo({
  className,
  markClassName,
  textClassName,
  showText = true,
  tone = "dark",
  variant = "lockup"
}: BrandLogoProps) {
  if (variant === "wordmark") {
    return (
      <span className={clsx("relative inline-flex aspect-[45/14] shrink-0 overflow-hidden rounded-lg", className)}>
        <Image
          alt="LeadAnchor"
          className="object-cover"
          fill
          priority
          sizes="(min-width: 768px) 420px, 78vw"
          src="/brand/logo-wordmark.png"
        />
      </span>
    );
  }

  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      {showText && (
        <span
          className={clsx(
            "text-lg font-semibold tracking-normal",
            textClassName ?? (tone === "dark" ? "text-white" : "text-anchor-ink")
          )}
        >
          Lead<span className="text-anchor-blue">Anchor</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={clsx("relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-anchor-navy shadow-[0_0_22px_rgba(37,99,235,0.35)]", className)}>
      <span className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md" aria-hidden="true" />
      <Image
        alt=""
        aria-hidden="true"
        className="relative object-cover"
        fill
        priority
        sizes="36px"
        src="/brand/logo-mark.png"
      />
    </span>
  );
}
