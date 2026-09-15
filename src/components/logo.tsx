import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
  sub?: boolean;
  className?: string;
  height?: number;
};

export function Logo({
  tone = "dark",
  compact = false,
  sub = true,
  className = "",
  height = 30,
}: LogoProps) {
  const fill =
    tone === "light" ? "var(--color-cream-50)" : "var(--color-brand-blue)";

  const vbH = sub ? 130 : 102;
  const vbW = 340;
  const w = (height / vbH) * vbW;

  return (
    <Link
      href="/"
      aria-label="poushee — Hotel & Restaurant, home"
      className={`group inline-flex items-center gap-2 ${className}`}
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
            x="-4"
            y="93"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="900"
            fontSize="112"
            letterSpacing="-4"
          >
            P
          </text>
          <text
            x="150"
            y="49"
            textAnchor="middle"
            fontFamily="var(--font-body-bn), sans-serif"
            fontWeight="700"
            fontSize="47"
          >
            পউষী
          </text>
          <text
            x="150"
            y="91"
            textAnchor="middle"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="900"
            fontSize="48"
            letterSpacing="-0.5"
          >
            OUSHE
          </text>
          <text
            x="238"
            y="93"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="900"
            fontSize="112"
            letterSpacing="-4"
          >
            E
          </text>
          <text
            x="318"
            y="20"
            textAnchor="middle"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="700"
            fontSize="22"
          >
            ®
          </text>
          {sub && (
            <text
              x="150"
              y="121"
              textAnchor="middle"
              fontFamily="var(--font-body-en), sans-serif"
              fontWeight="700"
              fontSize="19"
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
