import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { BUSINESS, telLink, waLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Visit Softcare Solutions in Nairobi CBD" },
      { name: "description", content: "Call, WhatsApp or visit Softcare Solutions in Nairobi CBD, next to Comfort 5 Hotel. Phone repair & genuine parts." },
      { property: "og:title", content: "Contact — Softcare Solutions" },
      { property: "og:description", content: "Reach us by phone, WhatsApp or visit our shop in Nairobi CBD." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's fix your phone today"
        subtitle="Walk in, call or chat with us on WhatsApp — we usually reply in minutes."
      />
      <Section className="!pt-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a href={waLink("Hi Softcare Solutions! I'd like to get my phone fixed today.")} target="_blank" rel="noreferrer"
               className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--color-whatsapp)] text-[color:var(--color-whatsapp-foreground)]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Get Your Phone Fixed Today</p>
                <p className="mt-1 text-sm font-medium text-primary">{BUSINESS.phone}</p>
              </div>
            </a>

            <a href={telLink()} className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Call us</p>
                <p className="text-sm text-muted-foreground">Talk to a technician directly</p>
                <p className="mt-1 text-sm font-medium text-primary">{BUSINESS.phone}</p>
              </div>
            </a>

            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary"><MapPin className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-sm font-semibold">Visit our shop</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.address}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary"><Clock className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-sm font-semibold">Opening hours</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.hours}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary"><Mail className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Softcare Solutions location"
              src={`https://www.google.com/maps?q=${BUSINESS.mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[460px] w-full"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
