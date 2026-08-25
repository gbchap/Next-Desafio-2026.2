'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const banners = [
  { id: 1, imagem: "/1.png", alt: "Promo1" },
  { id: 2, imagem: "/2.png", alt: "Promo2" },
  { id: 3, imagem: "/3.png", alt: "Promo3" },
];

export default function CarrosselPromo({ className }: { className?: string }) {
  const [plugin] = useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    queueMicrotask(onSelect); 
    api.on("select", onSelect);

    return () => {
        api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className={`w-full max-w-5xl mx-auto ${className ?? ""}`}>
      <Carousel
        className="w-full px-4 md:px-0"
        opts={{ loop: true }}
        plugins={[plugin]}
        setApi={setApi}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative w-full h-48 md:h-140 rounded-2xl overflow-hidden">
                <Image
                  src={banner.imagem}
                  alt={banner.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-pinkish hover:bg-forestgreen hover:text-base border-none cursor-pointer" />
        <CarouselNext className="bg-pinkish hover:bg-forestgreen hover:text-base border-none cursor-pointer" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              current === index ? "w-6 bg-forestgreen" : "w-2 bg-softgreen"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}