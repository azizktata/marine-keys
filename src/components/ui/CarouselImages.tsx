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
import { Card, CardFooter } from "@nextui-org/card";
import Link from "next/link";

export default function CarouselImages({
  services,
  locale,
}: {
  services: {
    title: string;
    description: string;
    image: string;
    number: number;
  }[];
  locale: string;
}) {
  const myServices = [...services];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  // const t = useTranslations(`Services`);
  return (
    <Carousel plugins={[plugin.current]} className="w-full  m-auto">
      <CarouselContent className="m-auto flex ">
        {myServices.map((service, index) => (
          <CarouselItem
            className=" sm:basis-1/2  flex justify-center items-center"
            key={index}
          >
            <div className="relative group w-[400px] h-[350px]  ">
              <Card className="h-full border-none rounded-none ">
                <Image
                  src={service.image}
                  alt="Marine Keys"
                  width={400}
                  height={350}
                  className="absolute top-0 left-0 w-full h-full object-cover  z-0 "
                />

                <div className="absolute inset-0 bg-[#223F67] bg-opacity-80 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white/90 px-2 pb-4 max-w-[260px] leading-relaxed">
                    {/* {service.description} */}
                    {service.description}
                  </p>
                </div>
                <CardFooter className="absolute inset-x-0 bottom-0 ">
                  <div className="bg-white w-full  px-2 py-3 bg-opacity-75 hover:bg-opacity-90">
                    <Link
                      href={`/${locale}/services/${service.title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      <p className="text-[#223F67] text-center text-xs font-bold">
                        {service.title}
                      </p>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20  p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20  p-2  rounded-none bg-black/70 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}
