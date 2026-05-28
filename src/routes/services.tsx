import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Camera, BatteryCharging, Plug, Cpu, Droplets, KeyRound, Recycle, Package, MessageCircle, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { waLink } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Phone Repair & Diagnostics | Softcare Solutions" },
      { name: "description", content: "Screen, camera, battery and charging port repair, software flashing, unlocking and refurbished phones in Nairobi CBD." },
      { property: "og:title", content: "Services — Softcare Solutions" },
      { property: "og:description", content: "Same-day Samsung & iPhone repair, genuine parts and software services." },
    ],
  }),
  component: ServicesPage,
});

const items = [
  { icon: Smartphone, t: "Screen Repair", d: "OLED & LCD replacements for Samsung Galaxy, iPhone, Tecno and Infinix devices." },
  { icon: Camera, t: "Camera Repair", d: "Rear and front camera module replacements with focus calibration." },
  { icon: BatteryCharging, t: "Battery Replacement", d: "Genuine batteries restoring all-day battery life." },
  { icon: Plug, t: "Charging Port Repair", d: "Cleaning, re-soldering or full USB-C / Lightning port replacements." },
  { icon: Cpu, t: "Software Flashing & Updates", d: "Boot loop, brick recovery, firmware flashing and Android/iOS updates." },
  { icon: Droplets, t: "Water Damage Repair", d: "Ultrasonic board cleaning and component-level diagnostics." },
  { icon: KeyRound, t: "Unlocking & Troubleshooting", d: "Network unlocking, FRP, screen locks and general troubleshooting." },
  { icon: Recycle, t: "Refurbished Phones", d: "Quality-tested second-hand phones with a real warranty." },
  { icon: Package, t: "Genuine Spare Parts", d: "Wide stock of screens, cameras, batteries, ports and flex cables." },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Repairs, parts and diagnostics — done right."
        subtitle="Every repair starts with a free diagnostic. We use genuine parts and back our work with a 90-day warranty."
      />
      <Section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="card-hover rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
              <a href={waLink(`Hi! I'd like to ask about: ${i.t}.`)} target="_blank" rel="noreferrer"
                 className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <MessageCircle className="h-4 w-4" /> Get a quote
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          {[
            { t: "Free Diagnostics", d: "We inspect and quote before any work begins." },
            { t: "90-Day Warranty", d: "Every repair is covered for peace of mind." },
            { t: "Genuine Parts Only", d: "OEM & top-grade aftermarket components." },
          ].map((b) => (
            <div key={b.t} className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">{b.t}</p>
                <p className="text-xs text-muted-foreground">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
