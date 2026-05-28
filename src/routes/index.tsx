import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, MessageCircle, Phone, ShieldCheck, Clock4, BadgeCheck, Wrench, Smartphone, Cpu, BatteryCharging, Camera, Plug, Droplets, KeyRound, Recycle, Package } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import workspaceImg from "@/assets/repair-workspace.jpg";
import phoneS23 from "@/assets/phone-s23.jpg";
import phoneA54 from "@/assets/phone-a54.jpg";
import phoneIph from "@/assets/phone-iphone13.jpg";
import { BUSINESS, telLink, waLink } from "@/lib/business";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Softcare Solutions — Phone Repair & Genuine Parts | Nairobi CBD" },
      { name: "description", content: "Professional phone repair, genuine spare parts and quality refurbished smartphones in Nairobi CBD, next to Comfort 5 Hotel." },
      { property: "og:title", content: "Softcare Solutions — Phone Repair & Parts" },
      { property: "og:description", content: "Same-day Samsung & iPhone repair, genuine parts and refurbished phones in Nairobi CBD." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Smartphone, label: "Screen Repair" },
  { icon: Camera, label: "Camera Repair" },
  { icon: BatteryCharging, label: "Battery Replacement" },
  { icon: Plug, label: "Charging Port" },
  { icon: Cpu, label: "Software & Flashing" },
  { icon: Droplets, label: "Water Damage" },
  { icon: KeyRound, label: "Unlocking" },
  { icon: Recycle, label: "Refurbished Phones" },
  { icon: Package, label: "Genuine Spare Parts" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero grid-pattern relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Nairobi CBD · Next to Comfort 5 Hotel
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Professional <span className="text-gradient-primary">Phone Repair</span> & Genuine Parts in Nairobi CBD
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              {BUSINESS.name} provides trusted smartphone repair, refurbished phones, and genuine
              phone spare parts — with same-day service and a 90-day warranty.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/parts" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                <Search className="h-4 w-4" /> Search Parts
              </Link>
              <a href={waLink("Hi Softcare Solutions! I'd like to chat about a repair.")} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-md bg-[color:var(--color-whatsapp)] px-5 py-3 text-sm font-semibold text-[color:var(--color-whatsapp-foreground)] transition-transform hover:-translate-y-0.5">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
              <a href={telLink()} className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "8,000+", v: "Phones repaired" },
                { k: "90-day", v: "Repair warranty" },
                { k: "Same-day", v: "Most repairs" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-card/50 p-3 text-center">
                  <dt className="font-display text-xl font-bold text-foreground">{s.k}</dt>
                  <dd className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-card">
              <img src={heroImg} alt="Samsung phones with internal parts" width={1600} height={1024}
                   className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -bottom-5 -left-5 hidden rounded-xl p-4 sm:block">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Genuine Parts</p>
                  <p className="text-xs text-muted-foreground">Quality you can trust</p>
                </div>
              </div>
            </div>
            <div className="glass absolute -top-5 -right-5 hidden rounded-xl p-4 sm:block">
              <div className="flex items-center gap-3">
                <Clock4 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Same-Day Repairs</p>
                  <p className="text-xs text-muted-foreground">In &amp; out in hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <Section className="!pt-10 !pb-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Genuine Parts", d: "OEM & graded quality" },
            { icon: BadgeCheck, t: "Certified Techs", d: "Trained on Samsung & iPhone" },
            { icon: Clock4, t: "Fast Turnaround", d: "Most fixes the same day" },
            { icon: Wrench, t: "90-Day Warranty", d: "On every repair" },
          ].map((f) => (
            <div key={f.t} className="glass card-hover rounded-xl p-5">
              <f.icon className="h-6 w-6 text-primary" />
              <p className="mt-3 text-sm font-semibold">{f.t}</p>
              <p className="text-xs text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section eyebrow="What we do" title="Repairs & services" subtitle="From cracked screens to motherboard-level diagnostics — all handled in our Nairobi CBD lab.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.label} className="card-hover group rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Professional service with genuine parts and warranty.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ABOUT BAND */}
      <Section eyebrow="About us" title="A smarter way to fix your phone">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <img src={workspaceImg} alt="Technician repairing a Samsung phone" loading="lazy" width={1280} height={960}
                 className="aspect-[5/4] w-full object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">Specialists in Samsung &amp; iPhone repair</h3>
            <p className="mt-3 text-muted-foreground">
              We've built {BUSINESS.name} around two things: genuine parts and honest pricing. From
              cracked Galaxy displays to battery swaps and software flashing, our technicians use the
              right tools and the right components — every time.
            </p>
            <ul className="mt-5 grid gap-2 text-sm">
              {[
                "Samsung & iPhone specialists",
                "Genuine OEM & graded spare parts",
                "Affordable refurbished smartphones",
                "Same-day repair for most issues",
                "Located next to Comfort 5 Hotel, Nairobi CBD",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-primary" /> {i}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link to="/about" className="rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-accent">Our story</Link>
              <Link to="/contact" className="rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow">Visit us</Link>
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURED PHONES */}
      <Section eyebrow="In stock now" title="Featured phones" subtitle="New and quality refurbished smartphones — mostly Samsung.">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { img: phoneS23, name: "Samsung Galaxy S23 Ultra", spec: "256GB · 12GB RAM", cond: "New", price: "KSh 145,000" },
            { img: phoneA54, name: "Samsung Galaxy A54 5G",     spec: "128GB · 8GB RAM",  cond: "New", price: "KSh 42,000" },
            { img: phoneIph, name: "Apple iPhone 13 Pro",       spec: "128GB · 6GB RAM",  cond: "Refurbished", price: "KSh 78,000" },
          ].map((p) => (
            <div key={p.name} className="card-hover overflow-hidden rounded-2xl border border-border bg-card">
              <div className="bg-gradient-to-b from-secondary to-background">
                <img src={p.img} alt={p.name} loading="lazy" width={800} height={1000} className="mx-auto aspect-[4/5] w-full object-contain p-6" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <span className="rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px]">{p.cond}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.spec}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display text-lg font-bold">{p.price}</p>
                  <a href={waLink(`Hi! I'm interested in the ${p.name}.`)} target="_blank" rel="noreferrer"
                     className="rounded-md bg-[color:var(--color-whatsapp)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-whatsapp-foreground)]">
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/phones" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            View all phones <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Loved by customers" title="What people say">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            { n: "Brian K.", r: "Walked in with a shattered S22 screen, walked out 2 hours later good as new. Honest pricing." },
            { n: "Wanjiru M.", r: "Best place for genuine batteries in CBD. My A54 lasts a full day again." },
            { n: "David O.", r: "Bought a refurbished iPhone 13 Pro — flawless condition and a real warranty. Highly recommend." },
          ].map((t) => (
            <figure key={t.n} className="glass rounded-2xl p-6">
              <blockquote className="text-sm text-foreground">“{t.r}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
                  {t.n[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.n}</p>
                  <p className="text-xs text-muted-foreground">Verified customer</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-primary p-8 sm:p-12">
          <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground sm:text-3xl">Need a part? Chat with us.</h3>
              <p className="mt-2 text-sm text-primary-foreground/85 sm:text-base">
                Tell us your phone model and we'll confirm availability in minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waLink("Hi! I want to check parts availability.")} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-card hover:-translate-y-0.5 transition-transform">
                <MessageCircle className="h-4 w-4" /> Ask About Availability
              </a>
              <a href={telLink()} className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
            </div>
          </div>
          <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        </div>
      </Section>
    </>
  );
}
