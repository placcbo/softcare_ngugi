function PageHeader({ eyebrow, title, subtitle }) {
  return <section className="bg-hero grid-pattern relative overflow-hidden pt-32 pb-14 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        {eyebrow && <span className="inline-block rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </span>}
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
      </div>
    </section>;
}
export {
  PageHeader
};
