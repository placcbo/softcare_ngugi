import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { PHONES } from "@/lib/inventory";
import { waLink } from "@/lib/business";

export const Route = createFileRoute("/phones")({
  head: () => ({
    meta: [
      { title: "Phones for Sale — Samsung, iPhone & More | Softcare Solutions" },
      { name: "description", content: "New and quality refurbished smartphones in Nairobi CBD — Samsung, Apple, Tecno and Infinix with warranty." },
      { property: "og:title", content: "Phones for Sale — Softcare Solutions" },
      { property: "og:description", content: "Browse new and refurbished smartphones with warranty in Nairobi CBD." },
    ],
  }),
  component: PhonesPage,
});

const FILTERS = ["All", "New", "Refurbished"] as const;

function PhonesPage() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const phones = useMemo(() => f === "All" ? PHONES : PHONES.filter(p => p.condition === f), [f]);

  return (
    <>
      <PageHeader
        eyebrow="Phones"
        title="New & refurbished smartphones"
        subtitle="Hand-picked devices, tested and backed by warranty. Mostly Samsung Galaxy — some iPhone, Tecno and Infinix."
      />
      <Section className="!pt-6">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((opt) => (
            <button key={opt} onClick={() => setF(opt)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${f === opt ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground"}`}>
              {opt}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phones.map((p) => (
            <article key={p.id} className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
              <div className="bg-gradient-to-b from-secondary to-background">
                <img src={p.image} alt={p.name} loading="lazy" width={800} height={1000} className="mx-auto aspect-[4/5] w-full object-contain p-6" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <span className={`rounded-full border px-2 py-0.5 text-[11px] ${p.condition === "New" ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-secondary text-muted-foreground"}`}>
                    {p.condition}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.storage} · {p.ram} RAM · {p.brand}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display text-lg font-bold">KSh {p.price.toLocaleString()}</p>
                  <a href={waLink(`Hi! I'm interested in the ${p.name} (KSh ${p.price.toLocaleString()}).`)} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1.5 rounded-md bg-[color:var(--color-whatsapp)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-whatsapp-foreground)]">
                    <MessageCircle className="h-3.5 w-3.5" /> Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
