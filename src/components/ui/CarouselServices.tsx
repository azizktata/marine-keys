"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import ServiceCard from "./ServiceCard";

export default function CarouselServices({
  services,
  speed = 2000,
  locale,
}: {
  services: {
    title: string;
    description: string;
    image: string;
    number: number;
  }[];
  speed?: number;
  locale: string;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: speed, stopOnInteraction: false })
  );

  const infiniteServices = [...services, ...services];
  return (
    <Carousel plugins={[plugin.current]} className="w-full  m-auto">
      <CarouselContent className="m-auto flex ">
        {infiniteServices.map((service, index) => (
          <CarouselItem
            className=" md:basis-1/2  p-0 flex  justify-center items-center "
            key={index}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              number={+service.number}
              imageUrl={service.image}
              locale={locale}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext />
      <CarouselPrevious /> */}
    </Carousel>
  );
}
