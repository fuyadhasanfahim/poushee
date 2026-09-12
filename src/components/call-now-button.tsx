"use client";

import { useLanguage } from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";

type Props = {
  tone?: "light" | "dark" | "gold";
  size?: "md" | "lg";
  className?: string;
  block?: boolean;
};

export function CallNowButton({
  tone = "gold",
  size = "md",
  className = "",
  block = false,
}: Props) {
  const { t } = useLanguage();

  const sizes =
    size === "lg" ? "px-7 py-3.5 text-[0.95rem]" : "px-5 py-2.5 text-sm";
  const tones: Record<string, string> = {
    gold: "bg-gradient-to-b from-gold-400 to-gold-500 text-navy-950 hover:from-gold-300 hover:to-gold-400",
    dark: "bg-navy-800 text-cream-50 hover:bg-navy-700",
    light:
      "border border-white/30 bg-white/10 text-cream-50 backdrop-blur-md hover:bg-white/20",
  };

  return (
    <a
      href={`tel:${SITE.callNumber}`}
      className={`font-body inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight shadow-[0_14px_30px_-14px_rgba(169,130,47,0.6)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 ${
      block ? "w-full" : ""
    } ${sizes} ${tones[tone]} ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.5 3.5 9 3l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2L19.5 15l-.5 2.5c-.3 1.2-1.5 2-2.7 1.8A16 16 0 0 1 3.7 6.2C3.5 5 4.3 3.8 5.5 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      {t("nav.callNow")}
    </a>
  );
}
