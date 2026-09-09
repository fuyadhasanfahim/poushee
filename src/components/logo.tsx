import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** "light" for dark backgrounds, "dark" for the ivory ground */
  tone?: "light" | "dark";
  /** badge only */
  compact?: boolean;
  /** show the "HOTEL & RESTAURANT" line under the wordmark */
  sub?: boolean;
  className?: string;
  /** rendered wordmark height in px */
  height?: number;
};

/**
 * Recreation of the printed poushee® mark: round badge, then
 *   P ( পউষী / OUSHE ) E®   [ / HOTEL & RESTAURANT ]
 * drawn as inline SVG so it stays crisp at any size. Royal blue on
 * light, ivory on dark.
 */
export function Logo({
  tone = "dark",
  compact = false,
  sub = true,
  className = "",
  height = 30,
}: LogoProps) {
  const fill =
    tone === "light" ? "var(--color-cream-50)" : "var(--color-brand-blue)";

  const vbH = sub ? 118 : 92;
  const vbW = 344;
  const w = (height / vbH) * vbW;

  return (
    <Link
      href="/"
      aria-label="poushee — Hotel & Restaurant, home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src="/favicon.png"
        alt=""
        width={48}
        height={48}
        priority
        className="h-9 w-9 shrink-0 rounded-full object-contain drop-shadow-[0_4px_14px_rgba(6,12,34,0.3)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 sm:h-10 sm:w-10"
      />

      {!compact && (
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          width={w}
          height={height}
          role="img"
          aria-label="poushee, Hotel and Restaurant"
          fill={fill}
          className="shrink-0"
        >
          <text
            x="0"
            y="82"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="800"
            fontSize="98"
            letterSpacing="-3"
          >
            P
          </text>
          <text
            x="160"
            y="40"
            textAnchor="middle"
            fontFamily="var(--font-heading-bn), var(--font-body-bn), serif"
            fontWeight="600"
            fontSize="44"
          >
            পউষী
          </text>
          <text
            x="160"
            y="84"
            textAnchor="middle"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="800"
            fontSize="47"
            letterSpacing="0.5"
          >
            OUSHE
          </text>
          <text
            x="238"
            y="82"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="800"
            fontSize="98"
            letterSpacing="-3"
          >
            E
          </text>
          <text
            x="318"
            y="32"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="600"
            fontSize="17"
          >
            ®
          </text>
          {sub && (
            <text
              x="172"
              y="112"
              textAnchor="middle"
              fontFamily="var(--font-body-en), sans-serif"
              fontWeight="700"
              fontSize="20"
              letterSpacing="3"
            >
              HOTEL &amp; RESTAURANT
            </text>
          )}
        </svg>
      )}
    </Link>
  );
}
