"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@nextui-org/button";

import Link from "next/link";

export default function Hero() {
  const covers = ["/cover-1.webp", "/cover-5.jpg", "/yacht-management.jpg"];
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  m-auto "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {covers.map((cover, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="relative w-full h-[600px] rounded-none overflow-hidden shadow-xl bg-gray-800">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="absolute z-0 w-full h-full object-cover"
                  src={cover}
                  radius="none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-linear"></div>

                {/* Body Content */}
                <CardBody className="absolute inset-0 z-10 flex flex-col  items-start  justify-start md:items-center md:justify-center bg-gradient-to-r from-black/80 via-linear to-transparent">
                  <div className="ml-9 sm:ml-4 md:ml-0 my-auto flex flex-col md:items-center">
                    <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-center w-full md:max-w-2xl">
                      Marine Keys <br></br> Elite Yachting Services
                    </h1>
                    <p className="text-gray-200 max-w-[280px] sm:max-w-sm text-md md:text-lg font-light  md:text-center mt-2 md:max-w-md">
                      specializing in yacht services, delivery and maintenance
                    </p>

                    <Button
                      as={Link}
                      href={`/#services`}
                      className="px-6 py-6 bg-[#2D72E0] text-white self-start md:self-center rounded-sm text-md sm:text-lg  hover:bg-[#223F67] focus:bg-[#223F67] mt-12"
                    >
                      Discover more
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20  p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20  p-2  rounded-none bg-black/70 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}
