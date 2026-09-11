"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-provider";
import { SITE } from "@/lib/site";

/**
 * Fixed bottom-right speed-dial: a single gold FAB that pops open into
 * WhatsApp, Call Now, Foodpanda and Directions. Shown on every page.
 */
export function FloatingActions() {
  const { t, tf } = useLanguage();
  const [open, setOpen] = useState(false);

  const actions = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/${SITE.whatsapp}`,
      external: true,
      className: "bg-[#25D366] text-white",
      icon: (
        <path
          d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm0 2a7 7 0 0 1 5.9 10.8l-.3.5.6 2.2-2.3-.6-.4.2A7 7 0 1 1 12 5Zm-3 3.3c-.2 0-.5 0-.7.3-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.6-.4c-.3-.1-1.5-.8-1.7-.9-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.6-2.4-1.6-.7-.7-1.1-1.5-1.3-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.5-1.4-.8-1.9-.1-.4-.3-.4-.5-.4h-.3Z"
          fill="currentColor"
        />
      ),
    },
    {
      key: "call",
      label: t("nav.callNow"),
      href: `tel:${SITE.callNumber}`,
      external: false,
      className: "bg-gold-500 text-navy-950",
      icon: (
        <path
          d="M6.5 3.5 9 3l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2L19.5 15l-.5 2.5c-.3 1.2-1.5 2-2.7 1.8A16 16 0 0 1 3.7 6.2C3.5 5 4.3 3.8 5.5 3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
          fill="none"
        />
      ),
    },
    {
      key: "foodpanda",
      label: "Foodpanda",
      href: SITE.social.foodpanda,
      external: true,
      className: "bg-[#D70F64] text-white",
      icon: (
        <>
          <circle cx="7" cy="7.3" r="2.3" fill="currentColor" />
          <circle cx="17" cy="7.3" r="2.3" fill="currentColor" />
          <circle cx="12" cy="13.2" r="7.3" fill="currentColor" />
          <ellipse
            cx="8.8"
            cy="12.6"
            rx="2"
            ry="2.5"
            fill="#D70F64"
            transform="rotate(-18 8.8 12.6)"
          />
          <ellipse
            cx="15.2"
            cy="12.6"
            rx="2"
            ry="2.5"
            fill="#D70F64"
            transform="rotate(18 15.2 12.6)"
          />
          <circle cx="9" cy="12.8" r="0.55" fill="currentColor" />
          <circle cx="15" cy="12.8" r="0.55" fill="currentColor" />
          <path d="M11 15.7h2l-1 1.1-1-1.1Z" fill="#D70F64" />
        </>
      ),
    },
    {
      key: "directions",
      label: t("contact.directions"),
      href: SITE.mapsUrl,
      external: true,
      className: "bg-cream-50 text-navy-900",
      icon: (
        <>
          <path
            d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
          />
          <circle
            cx="12"
            cy="10"
            r="2.6"
            stroke="currentColor"
            strokeWidth="1.7"
            fill="none"
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-navy-950/25 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className="fixed bottom-4 right-4 z-40 print:hidden sm:bottom-6 sm:right-6"
        aria-label={tf({ en: "Quick actions", bn: "দ্রুত যোগাযোগ" })}
      >
        <div className="relative flex flex-col items-end">
          <div className="pointer-events-none absolute bottom-full right-0 mb-3 flex flex-col items-end gap-2.5">
            {actions.map((a, i) => {
              const dist = actions.length - 1 - i;
              return (
                <a
                  key={a.key}
                  href={a.href}
                  {...(a.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={a.label}
                  title={a.label}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${dist * 45}ms` }}
                  className={`group pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full shadow-[0_16px_34px_-14px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.7)] motion-reduce:transition-none ${a.className} ${
                    open
                      ? "translate-y-0 scale-100 opacity-100"
                      : "translate-y-3 scale-50 opacity-0"
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                    {a.icon}
                  </svg>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            aria-label={
              open
                ? tf({ en: "Close quick actions", bn: "বন্ধ করুন" })
                : tf({ en: "Quick actions", bn: "দ্রুত যোগাযোগ" })
            }
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-gold-400 to-gold-500 text-navy-950 shadow-[0_18px_40px_-14px_rgba(169,130,47,0.75)] ring-1 ring-black/5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:scale-95 motion-reduce:transition-none"
          >
            <span
              className={`absolute h-[2.5px] w-5 rounded-full bg-navy-950 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "rotate-45" : "-translate-y-[5.5px]"
              }`}
            />
            <span
              className={`absolute h-[2.5px] w-5 rounded-full bg-navy-950 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "-rotate-45" : "translate-y-[5.5px]"
              }`}
            />
            <span
              className={`absolute inline-flex h-14 w-14 rounded-full bg-gold-400 transition-opacity duration-700 ${
                open ? "opacity-0" : "animate-ping opacity-40"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </>
  );
}
