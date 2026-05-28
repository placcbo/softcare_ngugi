import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/business";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hello Softcare Solutions! I'd like to ask about a phone repair/part.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[color:var(--color-whatsapp)] px-4 py-3.5 font-semibold text-[color:var(--color-whatsapp-foreground)] shadow-2xl ring-4 ring-[color:var(--color-whatsapp)]/20 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[color:var(--color-whatsapp)] opacity-30" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm sm:inline">Chat with us</span>
    </a>
  );
}
