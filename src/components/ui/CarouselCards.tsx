"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function CarouselCards() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = ["/hero-1.webp", "/hero-2.webp", "/cover-3.webp"];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-auto flex ">
        {images.map((img, index) => (
          <CarouselItem
            className=" sm:basis-1/2 md:basis-1/3 flex justify-center items-center"
            key={index}
          >
            <div className="relative group w-[400px] h-[350px]">
              {/* Image */}
              <Image
                src={img}
                alt="Marine Keys"
                width={350}
                height={350}
                className="rounded-none object-cover w-full h-full"
              />
              {/* Text with black overlay */}
              <div className="absolute inset-0 bg-[#223F67] bg-opacity-80 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="pl-4 ">
                  <h4 className="text-white text-lg font-semibold">
                    Marine Keys
                  </h4>
                  <p className="text-white/90 max-w-[260px] ">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
