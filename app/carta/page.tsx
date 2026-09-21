import { menuData, Allergen } from "@/lib/menu-data";
import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Milk, Egg, Fish, Nut, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Mapeo de iconos de alérgenos usando Lucide
const allergenIcons: Record<Allergen, React.ReactNode> = {
  gluten: <Wheat className="w-4 h-4" aria-label="Gluten" />,
  lacteos: <Milk className="w-4 h-4" aria-label="Lácteos" />,
  huevo: <Egg className="w-4 h-4" aria-label="Huevo" />,
  pescado: <Fish className="w-4 h-4" aria-label="Pescado" />,
  frutos_secos: <Nut className="w-4 h-4" aria-label="Frutos Secos" />,
};

export default function CartaPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-neutral-800 font-sans pb-12">
      {/* Header Fijo Móvil - Optimizado para QR con Logo */}
      <header className="sticky top-0 z-20 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EADDCE] px-4 py-3 flex items-center justify-between shadow-sm">
        <Link href="/" className="w-10">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-[#C25B45] hover:bg-[#C25B45]/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>

        {/* Logo Centrado */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#EADDCE] shadow-sm">
            {/* Asegúrate de tener logo.png en la carpeta /public */}
            <Image
              src="/logo.png"
              alt="Logo El Nómada"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Espaciador invisible para centrar el logo perfectamente */}
        <div className="w-10"></div>
      </header>

      <main className="max-w-3xl mx-auto p-4 md:p-6 space-y-10">
        {/* Bienvenida si entran directo por QR */}
        {/* <div className="text-center pt-2 pb-2 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#3A2D28]">
            El Nómada
          </h1>
          <p className="text-sm text-[#876F64] font-medium italic px-4">
            "La única meta: Sentirse vivo más allá de estarlo"
          </p>
        </div> */}
        <div className="flex flex-col items-center pt-4 pb-2 space-y-4">
          {/* Logo Tipográfico Oficial */}
          <div className="relative w-56 h-16">
            <Image
              src="/letras.png"
              alt="El Nómada Café & Copas"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* h1 oculto para mantener el SEO impecable */}
          <h1 className="sr-only">El Nómada</h1>

          <p className="text-sm text-[#876F64] font-medium italic px-4 text-center">
            "La única meta: Sentirse vivo más allá de estarlo"
          </p>
        </div>

        {menuData.map((category, index) => (
          <section key={index} className="space-y-5">
            <div className="space-y-3">
              {/* Títulos en color Terracota */}
              <h2 className="text-2xl font-bold tracking-tight text-[#C25B45] border-b border-[#EADDCE] pb-2">
                {category.category}
              </h2>

              {/* Nota destacada con tonos cálidos */}
              {category.note && (
                <div className="flex items-start gap-3 bg-[#C25B45]/10 p-4 rounded-xl text-sm border border-[#C25B45]/20 shadow-sm">
                  <Info className="w-5 h-5 text-[#C25B45] shrink-0 mt-0.5" />
                  <p className="text-[#913E2E] leading-relaxed font-medium">
                    {category.note}
                  </p>
                </div>
              )}
            </div>

            <div className="grid gap-3">
              {category.items.map((item, itemIdx) => (
                <Card
                  key={itemIdx}
                  className="overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border-[#EADDCE]"
                >
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-semibold text-lg text-[#3A2D28] leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-sm text-[#876F64] mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Píldora de precio en Terracota */}
                      <div className="bg-[#C25B45]/10 text-[#C25B45] px-3 py-1 rounded-lg shrink-0 border border-[#C25B45]/20">
                        <span className="font-bold text-lg whitespace-nowrap">
                          {item.price.toFixed(2)} €
                        </span>
                      </div>
                    </div>

                    {/* Alérgenos */}
                    {item.allergens.length > 0 && (
                      <div className="flex items-center gap-2 mt-2 pt-3 border-t border-[#EADDCE]">
                        <span className="text-xs text-[#876F64] font-medium mr-1">
                          Alérgenos:
                        </span>
                        {item.allergens.map((allergen) => (
                          <div
                            key={allergen}
                            title={allergen}
                            className="bg-[#FDFBF7] border border-[#EADDCE] text-[#876F64] p-1.5 rounded-md flex items-center justify-center"
                          >
                            {allergenIcons[allergen]}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="pt-8 pb-4 text-center text-xs text-[#876F64] space-y-2 border-t border-[#EADDCE] mt-12">
          <p>Precios con IVA incluido. Suplemento de terraza +0,50€.</p>
          <p>Consulte al personal por intolerancias o alergias no marcadas.</p>
        </div>
      </main>
    </div>
  );
}
