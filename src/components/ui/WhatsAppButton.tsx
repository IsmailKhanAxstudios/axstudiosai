import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AxStudios on WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid size-12 place-items-center rounded-full border border-white/30 bg-[#137640] text-white shadow-lg transition-colors hover:bg-[#0c5d31] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
