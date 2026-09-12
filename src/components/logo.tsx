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

  const vbH = sub ? 122 : 94;
  const vbW = 300;
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
            x="-3"
            y="83"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="800"
            fontSize="104"
            letterSpacing="-4"
          >
            P
          </text>
          <text
            x="150"
            y="37"
            textAnchor="middle"
            fontFamily="var(--font-heading-bn), var(--font-body-bn), serif"
            fontWeight="600"
            fontSize="43"
          >
            পউষী
          </text>
          <text
            x="150"
            y="83"
            textAnchor="middle"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="800"
            fontSize="49"
            letterSpacing="0.5"
          >
            OUSHE
          </text>
          <text
            x="238"
            y="83"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="800"
            fontSize="104"
            letterSpacing="-4"
          >
            E
          </text>
          <text
            x="292"
            y="31"
            fontFamily="var(--font-body-en), sans-serif"
            fontWeight="600"
            fontSize="15"
          >
            ®
          </text>
          {sub && (
            <text
              x="150"
              y="113"
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
