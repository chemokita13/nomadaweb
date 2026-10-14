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
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import {
  menuData,
  type Allergen,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menu-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const allergenIcons: Record<Allergen, React.ReactNode> = {
  gluten: <Wheat className="size-4" aria-label="Gluten" />,
  lacteos: <Milk className="size-4" aria-label="Lácteos" />,
  huevo: <Egg className="size-4" aria-label="Huevo" />,
  pescado: <Fish className="size-4" aria-label="Pescado" />,
  frutos_secos: <Nut className="size-4" aria-label="Frutos secos" />,
};

const allergenLabels: Record<Allergen, string> = {
  gluten: "gluten",
  lacteos: "lácteos",
  huevo: "huevo",
  pescado: "pescado",
  frutos_secos: "frutos secos",
};

function AllergenBadge({ allergen }: { allergen: Allergen }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex size-8 items-center justify-center rounded-full bg-[#FDF7ED] text-[#C8734D] ring-1 ring-[#F0D5C0] transition-colors hover:bg-[#F0D5C0]/50"
        aria-label={`Contiene ${allergenLabels[allergen]}`}
      >
        {allergenIcons[allergen]}
      </button>
      {open && (
        <>
          {/* Overlay invisible para cerrar al tocar fuera */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-[#E6B999]/40 bg-[#2C1A12] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            Contiene {allergenLabels[allergen]}
            {/* Flechita */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#2C1A12]" />
          </div>
        </>
      )}
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`group relative w-full [perspective:1000px] ${isFlipped ? "" : "h-full"}`}>
      <div
        className={`relative w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : "h-full"
        }`}
      >
        {/* Front */}
        <Card className={`flex flex-col overflow-hidden rounded-3xl border border-[#F0D5C0]/50 bg-white p-6 shadow-sm transition-all hover:shadow-md [backface-visibility:hidden] ${isFlipped ? "absolute inset-0" : "relative h-full"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-xl font-bold leading-tight text-[#4A2B1D]">
                {item.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#8B6453]">
                {item.description}
              </p>
              {item.alterEgo && (
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-xl border border-[#E6B999]/40 bg-[#FDF7ED] px-2.5 py-1 text-xs font-semibold text-[#AF4A24]">
                  <span className="font-bold uppercase tracking-wider text-[#C8734D]">
                    Alter Ego:
                  </span>
                  <span>{item.alterEgo}</span>
                </div>
              )}
            </div>
            <div className="shrink-0 rounded-2xl bg-[#FFF1E5] px-3.5 py-1.5 text-[#AF4A24]">
              <span className="whitespace-nowrap text-lg font-black tracking-tight">
                {item.price.toFixed(2)} €
              </span>
            </div>
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 pt-5">
            {item.allergens.length > 0 ? (
              <div className="flex items-center gap-2">
                {item.allergens.map((allergen) => (
                  <AllergenBadge key={allergen} allergen={allergen} />
                ))}
              </div>
            ) : (
              <div />
            )}

            {item.photo_url && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFlipped(true)}
                className="rounded-full border-[#F0D5C0] text-[#AF4A24] hover:bg-[#FFF1E5] hover:text-[#8e3a1b]"
              >
                <ImageIcon className="mr-2 size-4" />
                Ver foto
              </Button>
            )}
          </div>
        </Card>

        {/* Back */}
        {item.photo_url && (
          <Card className={`overflow-hidden rounded-3xl border-none shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] ${isFlipped ? "relative aspect-[4/5] sm:aspect-[3/4]" : "absolute inset-0"}`}>
            <div className="absolute inset-0 z-0">
              <Image
                src={item.photo_url}
                alt={item.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A12]/95 via-[#2C1A12]/30 to-black/20" />
            </div>

            <CardContent className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFlipped(false)}
                  className="rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 hover:text-white"
                >
                  <ArrowLeft className="size-5" />
                </Button>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold leading-tight">
                  {item.name}
                </h3>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

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
          <MenuItemCard key={item.name} item={item} />
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
      <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#E6B999]/30 bg-[#FAFAF8] px-5 shadow-sm">
        <Link href="/" aria-label="Volver al inicio">
          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-full text-[#AF4A24] hover:bg-[#F0D5C0]/30 hover:text-[#AF4A24]"
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
            Un oasis en Valladolid. Desayunos, vermú, tardeo y coctelería a tu
            ritmo.
          </p>
        </div>

        <div className="sticky top-[71px] z-20 -mx-5 border-y border-[#E6B999]/30 bg-[#FAFAF8] py-4 md:-mx-8">
          {/* Indicadores visuales de scroll para móvil */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#E6B999]/40 to-transparent md:hidden" />
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-6 bg-gradient-to-r from-[#FAFAF8] to-transparent md:hidden" />
          
          <div className="flex gap-2.5 overflow-x-auto px-5 pb-1 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
          <p>
            Consulte a nuestro personal por intolerancias o alergias no marcadas
            en la carta.
          </p>
        </div>
      </main>
    </div>
  );
}
