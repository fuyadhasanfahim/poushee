"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { num } from "@/lib/i18n/dictionary";

/**
 * A big ghost numeral + word set behind a section, so each stretch of the
 * ivory page has its own landmark and the eye always has a sense of place.
 */
export function SectionMark({
  index,
  label,
  className = "",
}: {
  index: number;
  label: string;
  className?: string;
}) {
  const { lang } = useLanguage();
  return (
    <div
      aria-hidden
      className={`watermark select-none ${className}`}
    >
      <span className="block text-[7rem] sm:text-[10rem] lg:text-[13rem]">
        {num(index, lang).padStart(2, lang === "bn" ? "০" : "0")}
      </span>
      <span className="mt-1 block pl-2 text-[0.7rem] font-semibold uppercase not-italic tracking-[0.4em] text-navy-800/15 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

/**
 * The transition between two sections: a fading hairline with a small
 * gold lozenge on it. Sits flush at a section boundary.
 */
export function SeamDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative mx-auto flex max-w-6xl items-center px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <span className="seam flex-1" />
      <span className="mx-4 flex items-center gap-1.5">
        <span className="h-1 w-1 rounded-full bg-gold-500/50" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
        <span className="h-1 w-1 rounded-full bg-gold-500/50" />
      </span>
      <span className="seam flex-1" />
    </div>
  );
}
