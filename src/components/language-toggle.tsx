"use client";

import { useLanguage } from "@/lib/i18n/language-provider";

type Props = { tone?: "light" | "dark"; className?: string };

export function LanguageToggle({ tone = "dark", className = "" }: Props) {
  const { lang, setLang, t } = useLanguage();

  const track =
    tone === "light"
      ? "border-white/25 bg-white/10"
      : "border-navy-800/20 bg-white/50";
  const idle = tone === "light" ? "text-cream-50/70" : "text-navy-900/55";
  const active =
    tone === "light"
      ? "bg-cream-50 text-navy-900 shadow-sm"
      : "bg-navy-800 text-cream-50 shadow-sm";

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={`inline-flex items-center gap-0.5 rounded-full border p-0.5 backdrop-blur-md ${track} ${className}`}
    >
      {(["en", "bn"] as const).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`min-w-9 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-300 ${
            lang === code ? active : `${idle} hover:opacity-100`
          }`}
        >
          {code === "en" ? "EN" : "বাং"}
        </button>
      ))}
    </div>
  );
}
