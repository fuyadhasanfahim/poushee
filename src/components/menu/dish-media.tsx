import Image from "next/image";
import { PlateRings, Sprig } from "@/components/decor/vectors";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function DishMedia({
  src,
  alt,
  label,
  fill = true,
  width,
  height,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
  className = "",
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width: width ?? 900, height: height ?? 700 })}
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-midnight ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 text-cream-50 bg-dots opacity-[0.14]" />
      <PlateRings className="pointer-events-none absolute -right-14 -top-14 h-56 w-56 text-gold-300/25" />
      <Sprig className="pointer-events-none absolute -bottom-6 left-4 h-28 w-20 text-gold-300/25" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(closest-side,rgba(200,162,78,0.22),transparent_75%)]" />
      {label && (
        <span className="content-layer max-w-[78%] text-center font-display text-xl leading-tight text-cream-50/90">
          {label}
        </span>
      )}
    </div>
  );
}
