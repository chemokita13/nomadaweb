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
  { id: 1, src: "/hero-1.jpg", alt: "Huevos Rotos Nómada" }, // Asigna aquí tu image_3895d4.png renombrada
  { id: 2, src: "/hero-2.jpg", alt: "Pincho de Tortilla" }, // Asigna aquí tu image_3895b8.jpg renombrada
  { id: 3, src: "/hero-3.jpg", alt: "Cocktails Nómada" },
];

export function HeroCarousel() {
  return (
    <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem key={img.id}>
            <div className="relative h-[40vh] md:h-[60vh] w-full rounded-xl overflow-hidden shadow-lg">
              {/* Fallback de color por si no hay imagen en el prototipo aún */}
              <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                <span className="text-neutral-500">Imagen: {img.alt}</span>
              </div>
              {/* Descomenta esto cuando tengas las imágenes en /public */}
              {/* <Image src={img.src} alt={img.alt} fill className="object-cover" priority={img.id === 1} /> */}
              <div className="absolute inset-0 bg-black/30" />{" "}
              {/* Overlay para contraste */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 hidden md:flex" />
      <CarouselNext className="right-4 hidden md:flex" />
    </Carousel>
  );
}
