/* Decorative SVG motifs. All inherit `currentColor`, all aria-hidden.
   Used to lift backgrounds and cards without extra image weight. */

type V = { className?: string; style?: React.CSSProperties };

/** A coriander / herb sprig — the house leaf motif. */
export function Sprig({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 158V44"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {[
        "M60 130c-16 2-26-6-30-22 16-2 26 6 30 22Z",
        "M60 130c16 2 26-6 30-22-16-2-26 6-30 22Z",
        "M60 104c-15 2-24-6-28-20 15-2 24 6 28 20Z",
        "M60 104c15 2 24-6 28-20-15-2-24 6-28 20Z",
        "M60 80c-13 1-21-6-25-18 13-1 21 6 25 18Z",
        "M60 80c13 1 21-6 25-18-13-1-21 6-25 18Z",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="currentColor"
          fillOpacity="0.16"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      ))}
      <path
        d="M60 44c-6-10-4-22 6-32-2 13-2 24-6 32Zm0 0c6-10 4-22-6-32 2 13 2 24 6 32Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="60" cy="12" r="4" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

/** A single bay leaf. */
export function BayLeaf({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 90 200"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M45 4C16 44 6 96 12 138c4 30 20 52 33 58 13-6 29-28 33-58 6-42-4-94-33-134Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M45 20v168"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeOpacity="0.7"
      />
      {[40, 66, 92, 118, 144].map((y, i) => (
        <g key={i} stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.55">
          <path d={`M45 ${y}C34 ${y + 6} 26 ${y + 12} 22 ${y + 24}`} />
          <path d={`M45 ${y}C56 ${y + 6} 64 ${y + 12} 68 ${y + 24}`} />
        </g>
      ))}
    </svg>
  );
}

/** Star anise. */
export function SpiceStar({ className, style }: V) {
  const pts = Array.from({ length: 8 });
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(50 50)">
        {pts.map((_, i) => (
          <g key={i} transform={`rotate(${i * 45})`}>
            <path
              d="M0 0C-7 -14 -6 -30 0 -42C6 -30 7 -14 0 0Z"
              fill="currentColor"
              fillOpacity="0.16"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle cy="-26" r="3.2" fill="currentColor" fillOpacity="0.4" />
          </g>
        ))}
        <circle r="6" fill="currentColor" fillOpacity="0.35" />
      </g>
    </svg>
  );
}

/** Three rising steam curls — echoes the poushee badge. */
export function SteamCurls({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 80 120"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {[0, 26, 52].map((x, i) => (
        <path
          key={i}
          d={`M${18 + x} 116c0-18 10-24 10-40s-10-22-10-38 8-24 8-24`}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity={0.7 - i * 0.12}
        />
      ))}
    </svg>
  );
}

/** Concentric plate rings. */
export function PlateRings({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {[96, 74, 52, 30].map((r, i) => (
        <circle
          key={i}
          cx="100"
          cy="100"
          r={r}
          stroke="currentColor"
          strokeWidth={i === 0 ? 1.5 : 1}
          strokeOpacity={0.5 - i * 0.08}
          strokeDasharray={i === 1 ? "2 6" : undefined}
        />
      ))}
    </svg>
  );
}

/** A dotted quarter-arc, for corners. */
export function DottedArc({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        id="dotarc"
        d="M8 192A184 184 0 0 1 192 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0.1 14"
        strokeOpacity="0.7"
      />
    </svg>
  );
}

/** Soft blurred organic blob — pure fill, meant to sit behind content. */
export function Blob({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M42.5 -63.4C54.1 -54.3 61.2 -39.6 66.7 -24.2C72.2 -8.9 76.1 7.1 72.6 21.4C69.1 35.7 58.2 48.3 44.6 57.7C31 67 14.5 73.1 -1.9 75.7C-18.3 78.3 -36.6 77.4 -49.6 68.3C-62.6 59.2 -70.3 41.9 -74.2 24.3C-78.1 6.7 -78.2 -11.2 -72 -26.3C-65.8 -41.4 -53.3 -53.7 -39.4 -62.3C-25.5 -70.9 -10.2 -75.8 3.6 -80.9C17.4 -86 34.8 -91.3 42.5 -63.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
