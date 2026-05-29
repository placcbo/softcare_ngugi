import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MessageCircle, X } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { PARTS, CATEGORIES, BRANDS } from "@/lib/inventory";
import { waLink } from "@/lib/business";
const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: "Parts Search \u2014 Genuine Phone Spare Parts | Softcare Solutions" },
      { name: "description", content: "Search Samsung, iPhone, Tecno and Infinix screens, cameras, batteries, charging ports and more. Live stock in Nairobi CBD." },
      { property: "og:title", content: "Parts Search \u2014 Softcare Solutions" },
      { property: "og:description", content: "Live inventory of genuine phone spare parts in Nairobi CBD." }
    ]
  }),
  component: PartsPage
});
const SUGGESTIONS = ["Samsung S21 camera", "A54 screen", "iPhone 12 battery", "S22 charging port"];
function PartsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [brand, setBrand] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PARTS.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (brand !== "All" && p.brand !== brand) return false;
      if (inStockOnly && !p.inStock) return false;
      if (!needle) return true;
      return p.name.toLowerCase().includes(needle) || p.model.toLowerCase().includes(needle) || p.brand.toLowerCase().includes(needle) || p.category.toLowerCase().includes(needle);
    });
  }, [q, cat, brand, inStockOnly]);
  return <>
      <PageHeader
    eyebrow="Parts Search"
    title="Find genuine phone parts in seconds"
    subtitle="Search by phone model, part type or brand. We'll confirm availability on WhatsApp."
  />

      <Section className="!py-8">
        {
    /* Search bar */
  }
        <div className="glass rounded-2xl p-4 sm:p-5">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
    value={q}
    onChange={(e) => setQ(e.target.value)}
    placeholder="Try: 'Samsung S21 camera' or 'iPhone 12 battery'"
    className="w-full rounded-xl border border-border bg-background py-3.5 pl-12 pr-10 text-sm outline-none ring-primary/40 transition focus:ring-2"
  />
            {q && <button onClick={() => setQ("")} aria-label="Clear" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>}
          </label>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">Suggestions:</span>
            {SUGGESTIONS.map((s) => <button key={s} onClick={() => setQ(s)} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground hover:border-primary hover:text-foreground">
                {s}
              </button>)}
          </div>

          {
    /* Filters */
  }
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <select
    value={cat}
    onChange={(e) => setCat(e.target.value)}
    className="rounded-md border border-border bg-background px-3 py-2 text-sm"
  >
              <option value="All">All categories</option>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select
    value={brand}
    onChange={(e) => setBrand(e.target.value)}
    className="rounded-md border border-border bg-background px-3 py-2 text-sm"
  >
              <option value="All">All brands</option>
              {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            <label className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm">
              <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="h-4 w-4 accent-[color:var(--color-primary)]" />
              In-stock only
            </label>
          </div>
        </div>

        {
    /* Category chips */
  }
        <div className="mt-6 flex flex-wrap gap-2">
          <button
    onClick={() => setCat("All")}
    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${cat === "All" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}
  >All</button>
          {CATEGORIES.map((c) => <button
    key={c}
    onClick={() => setCat(c)}
    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}
  >
              {c}
            </button>)}
        </div>

        {
    /* Results */
  }
        <div className="mt-6 text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "part" : "parts"} found
        </div>

        {results.length === 0 ? <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="font-semibold">No matching parts found.</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different model or chat with us — we may have it on order.</p>
            <a
    href={waLink(`Hi! Do you have this part in stock: "${q}"?`)}
    target="_blank"
    rel="noreferrer"
    className="mt-4 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-whatsapp)] px-4 py-2.5 text-sm font-semibold text-[color:var(--color-whatsapp-foreground)]"
  >
              <MessageCircle className="h-4 w-4" /> Ask about availability
            </a>
          </div> : <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => <article key={p.id} className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={p.image} alt={p.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover" />
                  <span className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-[11px] font-semibold ${p.inStock ? "bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)]" : "bg-destructive text-destructive-foreground"}`}>
                    {p.inStock ? "In stock" : "Out of stock"}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold leading-tight">{p.name}</h3>
                    <span className="shrink-0 rounded-md border border-border bg-secondary px-2 py-0.5 text-[11px]">{p.brand}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{p.category} · {p.model}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-display text-base font-bold">KSh {p.price.toLocaleString()}</p>
                    <a
    href={waLink(`Hi! Is the ${p.name} (KSh ${p.price.toLocaleString()}) available?`)}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--color-whatsapp)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-whatsapp-foreground)]"
  >
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </article>)}
          </div>}
      </Section>
    </>;
}
export {
  Route
};
