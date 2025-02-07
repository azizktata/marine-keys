"use client";
import React from "react";
import {
  Carousel,
  CarouselApi,
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
    Autoplay({ delay: speed, stopOnInteraction: true })
  );

  const infiniteServices = [...services, ...services];
  const [cApi, setCApi] = React.useState<CarouselApi>();
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={() => cApi!.plugins().autoplay?.stop()}
      onMouseLeave={() => cApi!.plugins().autoplay?.play()}
      className="w-full  m-auto"
      setApi={setCApi}
    >
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
