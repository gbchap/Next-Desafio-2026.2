'use client';

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const banners = [
  {id: 1, imagem: "/1.png", alt: "Promo1"},
  {id: 2, imagem: "/2.png", alt: "Promo2"},
  {id: 3, imagem: "/3.png", alt: "Promo3"},
];

export default function CarrosselPromo({ className }: { className?: string }){
  return(
    <Carousel className={`w-full max-w-5xl mx-auto px-4 md:px-0 ${className ?? ""}`}>
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
      <CarouselPrevious className="bg-pinkish hover:bg-forestgreen hover:text-base border-none"/>
      <CarouselNext className="bg-pinkish hover:bg-forestgreen hover:text-base border-none"/>
    </Carousel>
  );
}