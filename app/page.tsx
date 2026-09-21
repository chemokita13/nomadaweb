// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/ui/hero-carousel";
import { MapPin, Clock, Phone } from "lucide-react";

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
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          El Nómada
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
          "La única meta: Sentirse vivo más allá de estarlo". Tapas, desayunos,
          batidos y los mejores cócteles en Valladolid.
        </p>
        <Link href="/carta">
          <Button size="lg" className="text-lg px-8 rounded-full shadow-md">
            Ver Carta Digital
          </Button>
        </Link>
      </section>

      {/* Carousel Section */}
      <section className="px-4 pb-16">
        <HeroCarousel />
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-muted/50 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Mucho más que un bar</h2>
          <p className="text-muted-foreground leading-relaxed">
            Desde nuestros famosos desayunos hasta los vermús toreros que se
            alargan. En Nómada Café & Copas cuidamos cada detalle, cada
            ingrediente y cada copa para que tu única preocupación sea disfrutar
            del momento.
          </p>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer className="mt-auto border-t bg-card text-card-foreground">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Encuéntranos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p>Lunes a Jueves: 8:00 - 01:00</p>
                  <p>Viernes y Sábados: 9:00 - 03:00</p>
                  <p>Domingos: 9:00 - 01:00</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p>983 624 716</p>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-primary" />
                {/* <Instagram className="w-5 h-5 text-primary" /> */}
                <a
                  href="https://instagram.com/nomadavalladolid"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  @nomadavalladolid
                </a>
              </li>
            </ul>
          </div>

          {/* Mapa */}
          <div className="w-full h-64 bg-muted rounded-xl overflow-hidden shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.332306307188!2d-4.726888!3d41.6483489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4712b000000001%3A0x0!2sValladolid!5e0!3m2!1ses!2ses!4v1700000000000"
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
