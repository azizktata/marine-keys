"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import BoatCard from "./BoatCard";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

export default function CarouselCards() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = ["/hero-1.webp", "/hero-2.webp", "/cover-3.webp"];
  const b = useTranslations("Buttons");
  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-[90%]  m-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="m-auto flex ">
          {images.map((img, index) => (
            <CarouselItem
              className=" sm:basis-1/2 md:basis-1/3 flex justify-center items-center "
              key={index}
            >
              <BoatCard
                nom="Marine Keys"
                length={42}
                image={img}
                prix={350}
                capacity="150"
                type="Caramander"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselNext />
      <CarouselPrevious /> */}
      </Carousel>
      <Button
        variant="bordered"
        className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
      >
        {b("Button2")}
      </Button>
    </>
  );
}
