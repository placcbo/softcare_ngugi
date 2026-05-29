import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS, telLink, waLink } from "@/lib/business";
function Footer() {
  return <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-auto" width={120} height={40} loading="lazy" />
            <span className="font-display text-lg font-semibold">{BUSINESS.name}</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Trusted smartphone repairs, genuine spare parts and quality refurbished devices in Nairobi CBD.
          </p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Twitter].map((Icon, i) => <a key={i} href="#" aria-label="Social" className="rounded-md border border-border bg-background p-2 text-muted-foreground transition-colors hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>)}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
    ["Services", "/services"],
    ["Parts Search", "/parts"],
    ["Phones", "/phones"],
    ["Gallery", "/gallery"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ].map(([l, h]) => <li key={h}>
                <Link to={h} className="transition-colors hover:text-foreground">{l}</Link>
              </li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" />{BUSINESS.address}</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /><a href={telLink()} className="hover:text-foreground">{BUSINESS.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" />{BUSINESS.email}</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-primary" />{BUSINESS.hours}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Need help fast?</h4>
          <p className="mt-4 text-sm text-muted-foreground">Message us on WhatsApp and we'll respond in minutes.</p>
          <a
    href={waLink("Hello Softcare Solutions, I'd like to ask about your services.")}
    target="_blank"
    rel="noreferrer"
    className="mt-4 inline-flex items-center gap-2 rounded-md bg-[color:var(--color-whatsapp)] px-4 py-2.5 text-sm font-semibold text-[color:var(--color-whatsapp-foreground)] transition-transform hover:-translate-y-0.5"
  >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {(/* @__PURE__ */ new Date()).getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Made with care in Nairobi.</p>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
