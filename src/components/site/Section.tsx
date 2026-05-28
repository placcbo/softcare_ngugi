import { PropsWithChildren } from "react";

export function Section({
  eyebrow, title, subtitle, children, className = "",
}: PropsWithChildren<{ eyebrow?: string; title?: string; subtitle?: string; className?: string }>) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow && (
            <span className="inline-block rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          {title && <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>}
          {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
