// components/hero-carousel.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  { id: 1, src: "/desayunos/14.jpg", alt: "Desayuno Makú" },
  { id: 4, src: "/desayunos/6.jpg", alt: "Desayuno Tuareg" },
  { id: 2, src: "/vermu/jamon.jpg", alt: "Tabla de jamón bellota" },
  { id: 3, src: "/copas/mojito.jpg", alt: "Ginger Mojito " },
  { id: 5, src: "/desayunos/15.jpg", alt: "Desayuno Hadza" },
];

export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
      <CarouselContent className="-ml-4">
        {images.map((img) => (
          <CarouselItem key={img.id} className="pl-4 basis-[85%] sm:basis-2/3 md:basis-1/2 lg:basis-1/3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#F0D5C0]/50 shadow-sm transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                priority={img.id === 1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A12]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-heading text-2xl font-bold text-white tracking-tight drop-shadow-md">
                  {img.alt}
                </h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 hidden md:flex" />
      <CarouselNext className="right-4 hidden md:flex" />
    </Carousel>
  );
}
