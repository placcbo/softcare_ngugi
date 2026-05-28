import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import hero from "@/assets/hero.jpg";
import workspace from "@/assets/repair-workspace.jpg";
import parts from "@/assets/parts-flatlay.jpg";
import tech from "@/assets/technician.jpg";
import shop from "@/assets/shop.jpg";
import s23 from "@/assets/phone-s23.jpg";
import a54 from "@/assets/phone-a54.jpg";
import iph from "@/assets/phone-iphone13.jpg";
import s21 from "@/assets/phone-s21.jpg";
import screen from "@/assets/part-screen.jpg";
import camera from "@/assets/part-camera.jpg";
import battery from "@/assets/part-battery.jpg";
import port from "@/assets/part-port.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Phones, Parts & Repairs | Softcare Solutions" },
      { name: "description", content: "A look inside our Nairobi CBD repair lab — Samsung phones, genuine parts, technicians at work." },
      { property: "og:title", content: "Gallery — Softcare Solutions" },
      { property: "og:description", content: "Inside our Nairobi CBD phone repair lab." },
    ],
  }),
  component: GalleryPage,
});

const TILES = [
  { src: hero, alt: "Samsung phones and parts", span: "lg:col-span-2 lg:row-span-2" },
  { src: tech, alt: "Technician at work" },
  { src: parts, alt: "Spare parts flat lay" },
  { src: workspace, alt: "Repair workspace", span: "lg:col-span-2" },
  { src: shop, alt: "Shop interior" },
  { src: s23, alt: "Galaxy S23 Ultra" },
  { src: a54, alt: "Galaxy A54" },
  { src: iph, alt: "iPhone 13 Pro" },
  { src: s21, alt: "Galaxy S21" },
  { src: screen, alt: "Phone screen" },
  { src: camera, alt: "Camera module" },
  { src: battery, alt: "Battery" },
  { src: port, alt: "Charging port" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside our Nairobi CBD lab"
        subtitle="A glimpse of the phones we sell, the parts we stock and the technicians who make it all happen."
      />
      <Section className="!pt-6">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {TILES.map((t, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${t.span ?? ""}`}>
              <img src={t.src} alt={t.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {t.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
