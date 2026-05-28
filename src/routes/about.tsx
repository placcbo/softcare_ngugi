import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { BadgeCheck, ShieldCheck, Clock4, MapPin } from "lucide-react";
import workspace from "@/assets/repair-workspace.jpg";
import shop from "@/assets/shop.jpg";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Softcare Solutions — Nairobi CBD Phone Repair Specialists" },
      { name: "description", content: "Samsung & iPhone repair specialists in Nairobi CBD. Genuine spare parts, affordable refurbished phones and same-day service." },
      { property: "og:title", content: "About — Softcare Solutions" },
      { property: "og:description", content: "Trusted phone repair and parts specialists in Nairobi CBD." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={`Trusted phone repair & parts in Nairobi CBD`}
        subtitle="We're a team of certified technicians dedicated to honest pricing, genuine parts and fast turnaround."
      />
      <Section className="!pt-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img src={workspace} alt="Repair workspace" loading="lazy" className="w-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">What we do best</h2>
            <p className="mt-3 text-muted-foreground">
              {BUSINESS.name} specialises in Samsung and iPhone repairs, genuine spare parts and
              affordable refurbished smartphones. From a cracked Galaxy display to deep board-level
              diagnostics, our team gets it done — usually the same day.
            </p>
            <ul className="mt-5 grid gap-3 text-sm">
              {[
                ["Samsung repair specialists", "OEM displays, batteries and back-glass."],
                ["iPhone certified work", "Lightning ports, batteries, cameras and Face ID."],
                ["Genuine spare parts", "We refuse to fit cheap knock-offs."],
                ["Affordable refurbished phones", "Tested, cleaned and warrantied."],
                ["Fast same-day service", "Most repairs done in 2–4 hours."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { i: ShieldCheck, t: "Genuine parts only", d: "We source from trusted suppliers." },
            { i: Clock4, t: "Same-day repairs", d: "Most fixes done within hours." },
            { i: MapPin, t: "Easy to find", d: "Nairobi CBD, next to Comfort 5 Hotel." },
          ].map((b) => (
            <div key={b.t} className="glass rounded-2xl p-6">
              <b.i className="h-6 w-6 text-primary" />
              <p className="mt-3 text-sm font-semibold">{b.t}</p>
              <p className="text-xs text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <img src={shop} alt="Softcare Solutions shop" loading="lazy" className="w-full object-cover" />
        </div>
      </Section>
    </>
  );
}
