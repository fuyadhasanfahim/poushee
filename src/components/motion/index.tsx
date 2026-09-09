"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionProps,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ *
 *  Reveal — fade + lift into view, once. IntersectionObserver +
 *  scroll fallback + timeout, so content can never stay invisible.
 * ------------------------------------------------------------------ */
type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  as?: "div" | "section" | "li" | "article" | "span" | "ul";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 26,
  blur = false,
  as = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(true);
      return;
    }
    let done = false;
    let io: IntersectionObserver | undefined;
    // eslint-disable-next-line prefer-const
    let timer: ReturnType<typeof setTimeout>;

    const cleanup = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      io?.disconnect();
      clearTimeout(timer);
    };
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      cleanup();
    };
    function check() {
      const r = el!.getBoundingClientRect();
      if (r.top < window.innerHeight - 24 && r.bottom > 0) show();
    }

    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => entries.some((e) => e.isIntersecting) && show(),
        { rootMargin: "0px 0px 10% 0px" },
      );
      io.observe(el);
    }
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();
    timer = setTimeout(show, 1400);
    return cleanup;
  }, [reduce]);

  const MotionTag = (
    motion as unknown as Record<
      string,
      React.ComponentType<
        MotionProps & { ref?: React.Ref<HTMLElement>; className?: string }
      >
    >
  )[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={
        reduce
          ? false
          : { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }
      }
      animate={shown ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.75, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ *
 *  Parallax — vertical drift as the element scrolls through view.
 * ------------------------------------------------------------------ */
export function Parallax({
  children,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [speed, -speed],
  );
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 *  Floaty — gentle infinite float for decorative shapes.
 * ------------------------------------------------------------------ */
export function Floaty({
  children,
  className,
  dur = 8,
  dist = 16,
  delay = 0,
  rotate = 0,
}: {
  children: React.ReactNode;
  className?: string;
  dur?: number;
  dist?: number;
  delay?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -dist, 0], rotate: [0, rotate, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 *  TiltCard — subtle pointer-driven 3D tilt.
 * ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className,
  max = 5,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const rx = useSpring(0, { stiffness: 220, damping: 22 });
  const ry = useSpring(0, { stiffness: 220, damping: 22 });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 *  Word-by-word display heading — CSS transform + class toggle, so it
 *  always ends visible even if animation frames were suppressed.
 * ------------------------------------------------------------------ */
export function AnimatedHeading({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 40);
    return () => clearTimeout(t);
  }, []);

  if (reduce) return <span className={className}>{text}</span>;
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="ah-word">
          <span
            className="ah-inner"
            style={{
              transitionDelay: delay + i * 0.08 + "s",
              transform: shown ? "none" : "translateY(115%)",
            }}
          >
            {i + 1 < words.length ? w + " " : w}
          </span>
        </span>
      ))}
    </span>
  );
}
