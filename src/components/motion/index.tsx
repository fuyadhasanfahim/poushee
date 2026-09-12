"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

type Tag = "div" | "section" | "li" | "article" | "span" | "ul";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  blur?: boolean;
  as?: Tag;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  delay = 0,
  y = 26,
  scale = 1,
  blur = false,
  as = "div",
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = usePrefersReducedMotion();
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

    const cleanup = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      io?.disconnect();
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
    return cleanup;
  }, [reduce]);

  const travel = blur ? y + 10 : y;
  const s = blur ? Math.min(scale, 0.965) : scale;
  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal=""
      className={`${className}${shown ? " is-in" : ""}`}
      style={
        {
          "--rv-y": `${travel}px`,
          "--rv-s": s,
          "--rv-d": `${delay}s`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

export function Parallax({
  children,
  speed = 40,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  return (
    <div
      data-parallax=""
      className={className}
      style={
        {
          "--px-from": `${speed}px`,
          "--px-to": `${-speed}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function Floaty({
  children,
  className = "",
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([e]) => el.classList.toggle("is-rest", !e.isIntersecting),
      { rootMargin: "120px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-floaty=""
      className={className}
      style={
        {
          "--ft-dur": `${dur}s`,
          "--ft-dist": `${dist}px`,
          "--ft-delay": `${delay}s`,
          "--ft-rot": `${rotate}deg`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function AnimatedHeading({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = usePrefersReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 40);
    return () => clearTimeout(t);
  }, []);

  if (reduce) return <span className={className}>{text}</span>;
  const words = text.split(" ");

  return (
    <span className={`${className}${shown ? " is-in" : ""}`}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="ah-word">
            <span
              className="ah-inner"
              style={{ "--w-d": `${delay + i * 0.08}s` } as CSSProperties}
            >
              {w}
            </span>
          </span>
          {i + 1 < words.length ? " " : ""}
        </span>
      ))}
    </span>
  );
}
