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
}: {
  services: {
    title: string;
    description: string;
    imageUrl: string;
    number: number;
  }[];
  speed?: number;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: speed, stopOnInteraction: false })
  );

  // Duplicate the service list to ensure infinite scrolling
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
              number={service.number}
              imageUrl={service.imageUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext />
      <CarouselPrevious /> */}
    </Carousel>
  );
}
