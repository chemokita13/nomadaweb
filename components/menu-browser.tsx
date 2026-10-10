"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Egg,
  Fish,
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

function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.category} className="scroll-mt-36 space-y-6">
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-4 border-b-2 border-[#E6B999]/50 pb-3">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#AF4A24]">
            {category.category}
          </h2>
          <span className="pb-1 text-xs font-bold uppercase tracking-widest text-[#C8734D]">
            {category.items.length} opciones
          </span>
        </div>

        {category.note && (
          <div className="flex items-start gap-3 rounded-2xl border border-[#E6B999]/30 bg-[#FDF7ED] p-4 text-sm shadow-sm">
            <Info className="mt-0.5 size-5 shrink-0 text-[#AF4A24]" />
            <p className="font-medium leading-relaxed text-[#7A4026]">
              {category.note}
            </p>
          </div>
        )}
        
        {category.notes && (
          <div className="flex items-start gap-3 rounded-2xl border border-[#E6B999]/30 bg-[#FDF7ED] p-5 text-sm shadow-sm">
            <Info className="mt-0.5 size-5 shrink-0 text-[#AF4A24]" />
            <ul className="space-y-2 font-medium leading-relaxed text-[#7A4026]">
              {category.notes.map((note, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-[#C8734D]">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {category.items.map((item) => (
          <Card
            key={item.name}
            className="overflow-hidden rounded-3xl border border-[#F0D5C0]/50 bg-white shadow-sm transition-all hover:shadow-md"
          >
            {item.photo_url && (
              <div className="relative h-48 w-full overflow-hidden bg-[#FDF7ED]">
                <Image
                  src={item.photo_url}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            )}
            <CardContent className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold leading-tight text-[#4A2B1D]">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#8B6453]">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl bg-[#FFF1E5] px-3.5 py-1.5 text-[#AF4A24]">
                  <span className="whitespace-nowrap text-lg font-black tracking-tight">
                    {item.price.toFixed(2)} €
                  </span>
                </div>
              </div>

              {item.allergens.length > 0 && (
                <div className="mt-5 flex items-center gap-3 pt-1">
                  {item.allergens.map((allergen) => (
                    <div
                      key={allergen}
                      title={allergen}
                      className="flex size-8 items-center justify-center rounded-full bg-[#FDF7ED] text-[#C8734D] ring-1 ring-[#F0D5C0]"
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
  
  const visibleCategories =
    selectedCategory === "Todas"
      ? menuData
      : menuData.filter(({ category }) => category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-16 text-[#4A2B1D]">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#E6B999]/30 bg-[#FAFAF8]/80 px-5 py-4 shadow-sm backdrop-blur-xl">
        <Link href="/" aria-label="Volver al inicio">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-[#AF4A24] hover:bg-[#F0D5C0]/30 hover:text-[#AF4A24]"
          >
            <ArrowLeft className="size-5" />
          </Button>
        </Link>
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
          <div className="relative size-10 overflow-hidden rounded-full border-2 border-[#E6B999]/50 bg-[#2C1A12] shadow-sm">
            <Image
              src="/logo.png"
              alt="Logo El Nómada"
              fill
              className="object-cover"
            />
          </div>
          <span className="hidden font-heading text-sm font-black uppercase tracking-[0.2em] text-[#AF4A24] sm:block">
            La Carta
          </span>
        </div>
        <div className="w-10" />
      </header>

      <main className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="space-y-5 pb-8 pt-10 text-center">
          <div className="relative mx-auto h-16 w-60">
            <Image
              src="/letras.png"
              alt="El Nómada Café & Copas"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="font-heading text-4xl font-black tracking-tight text-[#4A2B1D]">
            Descubre el Desierto
          </h1>
          <p className="mx-auto max-w-md text-sm font-medium text-[#8B6453]">
            Un oasis en Valladolid. Desayunos, vermú, tardeo y coctelería a tu ritmo.
          </p>
        </div>

        <div className="sticky top-[73px] z-20 -mx-5 border-y border-[#E6B999]/30 bg-[#FAFAF8]/95 px-5 py-4 backdrop-blur-xl md:-mx-8 md:px-8">
          <div className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {["Todas", ...menuData.map(({ category }) => category)].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold tracking-wide transition-all ${
                    selectedCategory === category
                      ? "border-[#AF4A24] bg-[#AF4A24] text-white shadow-md"
                      : "border-[#E6B999]/50 bg-white text-[#AF4A24] hover:bg-[#FDF7ED]"
                  }`}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="space-y-12 pt-10">
          {visibleCategories.map((category) => (
            <MenuSection key={category.category} category={category} />
          ))}
        </div>

        <div className="mt-16 space-y-2 border-t border-[#E6B999]/30 pb-4 pt-8 text-center text-xs font-medium text-[#8B6453]">
          <p>Precios con IVA incluido. Suplemento de terraza +0,50€.</p>
          <p>Consulte a nuestro personal por intolerancias o alergias no marcadas en la carta.</p>
        </div>
      </main>
    </div>
  );
}
