// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { Clock, Phone, MapPin } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fff8ed] text-[#4b271c]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-10 pt-16 text-center md:pb-14 md:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,#ffd99f_0%,transparent_48%),linear-gradient(135deg,#fff8ed_0%,#f7d4a4_100%)]" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c85b25]">
            Café & copas · Valladolid
          </p>
          <h1 className="mb-4 font-heading text-5xl font-bold tracking-tight text-[#71301c] md:text-7xl">
            Nómada
          </h1>
          <p className="mb-8 max-w-xl text-lg text-[#855d4b] md:text-xl">
            &quot;La única meta: Sentirse vivo más allá de estarlo&quot;. <br />
            Tapas, desayunos, batidos y los mejores cócteles en Valladolid.
          </p>
          <Link href="/carta" className="group">
            <Button
              size="lg"
              className="rounded-full bg-[#a33d1f] px-8 text-lg text-[#fff8ed] shadow-md hover:bg-[#71301c]"
            >
              Ver Carta Digital
            </Button>
          </Link>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-4 pb-16">
        <HeroCarousel />
      </section>

      {/* Value Proposition */}
      <section className="border-y border-[#e5b77c] bg-[#f7d8ad] px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c85b25]">
            Una pausa con sabor
          </p>
          <h2 className="font-heading text-3xl font-semibold text-[#71301c]">
            Mucho más que un bar
          </h2>
          <p className="leading-relaxed text-[#855d4b]">
            Desde nuestros famosos desayunos hasta los vermús toreros que se
            alargan. En Nómada Café & Copas cuidamos cada detalle, cada
            ingrediente y cada copa para que tu única preocupación sea disfrutar
            del momento.
          </p>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer className="mt-auto border-t border-[#a85f3c] bg-[#321c14] text-[#fff1dc]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-[#ffd99f]">
              Encuéntranos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 text-[#ef9951]" />
                <div>
                  <p>Lunes a Jueves: 8:00 - 01:00</p>
                  <p>Viernes y Sábados: 9:00 - 03:00</p>
                  <p>Domingos: 9:00 - 01:00</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-[#ef9951]" />
                <p>983 624 716</p>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="size-5 text-[#ef9951]" />
                <a
                  href="https://instagram.com/nomadavalladolid"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  @nomadavalladolid
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-[#ef9951]" />
                <div>
                  <p>
                    Paseo del Arco de Ladrillo 50, 47008, Valladolid (Castilla y
                    León)
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Mapa */}
          <div className="h-64 w-full overflow-hidden rounded-xl border border-[#a85f3c] bg-[#4b271c] shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.893329509833!2d-4.732838323827219!3d41.63643708050993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd476d7f49bda61f%3A0x905f6bb4a854a46a!2zTsOTTUFEQQ!5e0!3m2!1ses!2ses!4v1790175388576!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </main>
  );
}
