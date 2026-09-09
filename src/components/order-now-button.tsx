"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";

type Props = {
  tone?: "light" | "dark" | "gold";
  size?: "md" | "lg";
  className?: string;
  block?: boolean;
};

/**
 * "Order Now" is intentionally inert for now — pressing it explains that
 * online ordering is not open yet, per the client's brief.
 */
export function OrderNowButton({
  tone = "gold",
  size = "md",
  className = "",
  block = false,
}: Props) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function ping() {
    setOpen(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 2600);
  }

  const sizes =
    size === "lg" ? "px-7 py-3.5 text-[0.95rem]" : "px-5 py-2.5 text-sm";
  const tones: Record<string, string> = {
    gold: "bg-gradient-to-b from-gold-400 to-gold-500 text-navy-950 hover:from-gold-300 hover:to-gold-400",
    dark: "bg-navy-800 text-cream-50 hover:bg-navy-700",
    light: "border border-white/30 bg-white/10 text-cream-50 backdrop-blur-md hover:bg-white/20",
  };

  return (
    <span className={`relative inline-block ${block ? "w-full" : ""}`}>
      <button
        type="button"
        onClick={ping}
        aria-disabled="true"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full font-medium tracking-tight shadow-[0_14px_30px_-14px_rgba(169,130,47,0.6)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 ${sizes} ${tones[tone]} ${className}`}
      >
        {t("nav.orderNow")}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span
        role="status"
        className={`pointer-events-none absolute left-1/2 top-[calc(100%+10px)] z-50 w-max max-w-[15rem] -translate-x-1/2 rounded-xl border border-navy-800/10 bg-navy-900 px-3.5 py-2 text-center text-xs font-medium text-cream-50 shadow-xl transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
        }`}
      >
        {t("common.orderDisabled")}
      </span>
    </span>
  );
}
