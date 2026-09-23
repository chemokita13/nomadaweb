"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Egg,
  Fish,
  Image as ImageIcon,
  Info,
  Milk,
  Nut,
  Wheat,
} from "lucide-react";
import Link from "next/link";
import { menuData, type Allergen, type MenuCategory } from "@/lib/menu-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const allergenIcons: Record<Allergen, React.ReactNode> = {
  gluten: <Wheat className="size-4" aria-label="Gluten" />,
  lacteos: <Milk className="size-4" aria-label="Lácteos" />,
  huevo: <Egg className="size-4" aria-label="Huevo" />,
  pescado: <Fish className="size-4" aria-label="Pescado" />,
  frutos_secos: <Nut className="size-4" aria-label="Frutos secos" />,
};

const gallery = [
  { src: "/descargar.jpg", alt: "Logotipo de El Nómada sobre fondo oscuro" },
  {
    src: "/Diseño sin título.png",
    alt: "Logotipo de El Nómada sobre fondo claro",
  },
];

function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.category} className="scroll-mt-36 space-y-5">
      <div className="space-y-3">
        <div className="flex items-end justify-between gap-4 border-b border-[#e7b77e] pb-2">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#a33d1f]">
            {category.category}
          </h2>
          <span className="pb-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a85f3c]">
            {category.items.length} opciones
          </span>
        </div>

        {category.note && (
          <div className="flex items-start gap-3 rounded-xl border border-[#e7b77e] bg-[#fff1dc] p-4 text-sm shadow-sm">
            <Info className="mt-0.5 size-5 shrink-0 text-[#c85b25]" />
            <p className="font-medium leading-relaxed text-[#814329]">
              {category.note}
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-3">
        {category.items.map((item) => (
          <Card
            key={item.name}
            className="overflow-hidden border-[#e7c49d] bg-[#fffdf9] shadow-sm transition-shadow hover:shadow-md"
          >
            <CardContent className="flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold leading-tight text-[#4b271c]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#855d4b]">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg border border-[#e9a96e] bg-[#fff0dc] px-3 py-1 text-[#a33d1f]">
                  <span className="whitespace-nowrap text-lg font-bold">
                    {item.price.toFixed(2)} €
                  </span>
                </div>
              </div>

              {item.allergens.length > 0 && (
                <div className="mt-2 flex items-center gap-2 border-t border-[#f0dcc2] pt-3">
                  <span className="mr-1 text-xs font-medium text-[#9b6d58]">
                    Alérgenos:
                  </span>
                  {item.allergens.map((allergen) => (
                    <div
                      key={allergen}
                      title={allergen}
                      className="flex items-center justify-center rounded-md border border-[#e7c49d] bg-[#fff8ed] p-1.5 text-[#a85f3c]"
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
  );
}

export function MenuBrowser() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [showPhotos, setShowPhotos] = useState(false);
  const visibleCategories =
    selectedCategory === "Todas"
      ? menuData
      : menuData.filter(({ category }) => category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fff8ed] pb-12 text-[#4b271c]">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#e5b77c] bg-[#fff8ed]/95 px-4 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" aria-label="Volver al inicio">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-[#a33d1f] hover:bg-[#f7d8ad]"
          >
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <div className="relative size-9 overflow-hidden rounded-full border border-[#e5b77c] bg-[#24150f] shadow-sm">
            <Image
              src="/logo.png"
              alt="Logo El Nómada"
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden font-heading text-sm font-bold uppercase tracking-[0.14em] text-[#8e371d] sm:block">
            Carta
          </span>
        </div>
        <div className="w-8" />
      </header>

      <main className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="space-y-4 pb-7 pt-9 text-center">
          <div className="relative mx-auto h-16 w-56">
            <Image
              src="/letras.png"
              alt="El Nómada Café & Copas"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-[#71301c]">
            Elige tu momento
          </h1>
          <p className="mx-auto max-w-lg text-sm font-medium italic text-[#97634c]">
            Desayunos, vermú y copas en Valladolid. Explora la carta a tu ritmo.
          </p>
        </div>

        <div className="sticky top-[65px] z-20 -mx-4 border-y border-[#e5b77c] bg-[#fff8ed]/95 px-4 py-3 backdrop-blur-md md:-mx-6 md:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {["Todas", ...menuData.map(({ category }) => category)].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedCategory === category
                      ? "border-[#a33d1f] bg-[#a33d1f] text-[#fff8ed]"
                      : "border-[#e2b071] bg-[#fffdf9] text-[#8e4a2f] hover:bg-[#f7d8ad]"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
            <button
              type="button"
              aria-pressed={showPhotos}
              onClick={() => setShowPhotos((value) => !value)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                showPhotos
                  ? "border-[#d66c24] bg-[#d66c24] text-white"
                  : "border-[#e2b071] bg-[#fffdf9] text-[#8e4a2f] hover:bg-[#f7d8ad]"
              }`}
            >
              <ImageIcon className="size-4" />
              Fotos
            </button>
          </div>
        </div>

        {showPhotos && (
          <section
            className="space-y-3 pb-8 pt-7"
            aria-label="Fotos de El Nómada"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c85b25]">
                  El ambiente Nómada
                </p>
                <h2 className="font-heading text-xl font-bold text-[#71301c]">
                  Mira antes de elegir
                </h2>
              </div>
              <span className="text-xs text-[#97634c]">Galería del local</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#e7c49d] bg-[#321c14] shadow-sm"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 360px"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="space-y-10 pt-7">
          {visibleCategories.map((category) => (
            <MenuSection key={category.category} category={category} />
          ))}
        </div>

        <div className="mt-12 space-y-2 border-t border-[#e7b77e] pb-4 pt-8 text-center text-xs text-[#97634c]">
          <p>Precios con IVA incluido. Suplemento de terraza +0,50€.</p>
          <p>Consulte al personal por intolerancias o alergias no marcadas.</p>
        </div>
      </main>
    </div>
  );
}
