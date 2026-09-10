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

/* ------------------------------------------------------------------ *
 *  Bengali florals — the water lily (shapla, our national flower),
 *  the rose, the lotus and a curling flower spray. Line-drawn so they
 *  stay crisp at any size and inherit `currentColor`.
 * ------------------------------------------------------------------ */

/** Shapla — water lily. Two rings of pointed petals, a starburst centre
 *  and a lily pad behind. */
export function WaterLily({ className, style }: V) {
  const outer = Array.from({ length: 12 });
  const inner = Array.from({ length: 8 });
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {/* lily pad */}
      <path
        d="M70 118c30 0 52-16 52-38 0-9-4-15-9-15-4 0-6 4-10 4-6 0-9-8-19-8s-13 8-19 8c-4 0-6-4-10-4-5 0-9 6-9 15 0 22 22 38 33 38Z"
        fill="currentColor"
        fillOpacity="0.06"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.5"
      />
      <g transform="translate(70 70)">
        {outer.map((_, i) => (
          <path
            key={`o${i}`}
            transform={`rotate(${i * 30})`}
            d="M0 0C-7 -14 -7 -33 0 -50C7 -33 7 -14 0 0Z"
            fill="currentColor"
            fillOpacity="0.1"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        ))}
        {inner.map((_, i) => (
          <path
            key={`i${i}`}
            transform={`rotate(${i * 45 + 22})`}
            d="M0 0C-5 -10 -5 -24 0 -36C5 -24 5 -10 0 0Z"
            fill="currentColor"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeWidth="1.3"
          />
        ))}
        {inner.map((_, i) => (
          <line
            key={`s${i}`}
            transform={`rotate(${i * 45})`}
            x1="0"
            y1="0"
            x2="0"
            y2="-16"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
        ))}
        <circle r="6" fill="currentColor" fillOpacity="0.5" />
      </g>
    </svg>
  );
}

/** A rose in bloom on a short leafy stem — spiralled petals. */
export function Rose({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 110 150"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M55 78C55 120 55 132 55 146"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M55 108c-14 0-24-8-27-22 14-1 24 7 27 22Zm0 14c13 0 22-7 25-20-13-1-22 6-25 20Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <g transform="translate(55 48)">
        <circle
          r="34"
          fill="currentColor"
          fillOpacity="0.06"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M0 -22C13 -22 22 -12 22 1S12 22 0 22-22 13-22 0c0-9 5-16 13-19"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M0 -13C9 -13 15 -6 15 2S8 15 0 15-13 9-13 1c0-5 3-9 7-11"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2 -6c5 1 8 5 7 10s-6 7-10 6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M0 -34v12M23 -8l-8 6M14 27l-4-10M-20 20l7-8M-30 -6l11 3" stroke="currentColor" strokeWidth="1.4" strokeOpacity="0.55" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Lotus — five broad front petals over a lower fan. */
export function Lotus({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 160 110"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(80 96)">
        {[-60, -30, 0, 30, 60].map((a, i) => (
          <path
            key={`b${i}`}
            transform={`rotate(${a})`}
            d="M0 0C-16 -18 -22 -40 0 -66 22 -40 16 -18 0 0Z"
            fill="currentColor"
            fillOpacity="0.07"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeOpacity="0.6"
          />
        ))}
        {[-42, -14, 14, 42].map((a, i) => (
          <path
            key={`m${i}`}
            transform={`rotate(${a})`}
            d="M0 0C-13 -16 -17 -38 0 -78 17 -38 13 -16 0 0Z"
            fill="currentColor"
            fillOpacity="0.12"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        ))}
        <path
          d="M0 0C-9 -18 -9 -52 0 -88 9 -52 9 -18 0 0Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

/** A curling stem set with small blossoms and leaves — for section corners. */
export function FloralSpray({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 210C40 150 34 96 78 60c34-28 74-24 96-44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      {[
        [70, 70],
        [104, 44],
        [150, 24],
        [46, 128],
        [34, 172],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          {[0, 72, 144, 216, 288].map((a, j) => (
            <ellipse
              key={j}
              transform={`rotate(${a})`}
              cx="0"
              cy="-8"
              rx="4.5"
              ry="8"
              fill="currentColor"
              fillOpacity="0.16"
              stroke="currentColor"
              strokeWidth="1.1"
            />
          ))}
          <circle r="3" fill="currentColor" fillOpacity="0.5" />
        </g>
      ))}
      {[
        [58, 104, -30],
        [90, 150, 20],
        [128, 60, 40],
      ].map(([x, y, r], i) => (
        <path
          key={`l${i}`}
          transform={`translate(${x} ${y}) rotate(${r})`}
          d="M0 0C-6 -12 -4 -24 8 -34-2 -22-2 -10 0 0Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}

/** A fanned palm frond — a nod to the Cox's Bazar coast. */
export function PalmFrond({ className, style }: V) {
  return (
    <svg
      viewBox="0 0 180 160"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 150C60 132 118 96 170 20"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {Array.from({ length: 11 }).map((_, i) => {
        const t = i / 10;
        const x = 12 + (170 - 12) * t;
        const y = 150 + (20 - 150) * (t * t * 0.6 + t * 0.4);
        const len = 26 + 34 * Math.sin(Math.PI * t);
        return (
          <g key={i}>
            <path
              d={`M${x} ${y}c${-len * 0.5} ${-len * 0.2} ${-len} ${-len * 0.7} ${-len} ${-len}`}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeOpacity="0.65"
            />
            <path
              d={`M${x} ${y}c${len * 0.5} ${-len * 0.2} ${len} ${-len * 0.7} ${len} ${-len}`}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </g>
        );
      })}
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
