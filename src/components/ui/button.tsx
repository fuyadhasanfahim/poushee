import Link from "next/link";

type Variant = "primary" | "gold" | "ghost" | "ghost-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-850 text-cream-50 shadow-[0_16px_34px_-16px_rgba(12,22,54,0.75)] hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-18px_rgba(12,22,54,0.85)]",
  gold: "bg-gradient-to-b from-gold-300 to-gold-500 text-navy-950 shadow-[0_16px_34px_-16px_rgba(166,127,48,0.7)] hover:from-gold-200 hover:to-gold-400 hover:-translate-y-0.5",
  ghost:
    "border border-navy-800/25 bg-cream-50/70 text-navy-900 backdrop-blur-md hover:bg-cream-50 hover:border-navy-800/45",
  "ghost-light":
    "border border-cream-50/35 bg-cream-50/10 text-cream-50 backdrop-blur-md hover:bg-cream-50/20 hover:border-cream-50/60",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className">) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
