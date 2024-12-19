"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@nextui-org/button";

import Link from "next/link";

export default function Hero() {
  const covers = ["cover-1.webp", "cover-3.webp"];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
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
                {/* Price Header */}
                {/* <CardHeader className="absolute z-10 left-0 right-0 flex justify-center mt-32 flex flex-col mx-auto max-w-xs bg-white/90 rounded-xs px-4 py-2">
                  <p className="text-[#005bc4] font-semibold"></p>
                </CardHeader> */}

                {/* Background Image */}
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
                  <div className="sm:ml-4 md:ml-0 my-auto flex flex-col md:items-center">
                    <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-center w-full md:max-w-2xl">
                      Marine Keys <br></br> Elite Yachting Services
                    </h1>
                    <p className="text-gray-200 max-w-xs sm:max-w-sm text-md md:text-xl  md:text-center mt-2 md:max-w-md">
                      Elite Yachting Services specializing in various yacht
                      services, delivery and maintenance
                    </p>

                    <Button
                      as={Link}
                      href={`/#services`}
                      className="px-8 py-6 bg-[#2D72E0] text-white self-start md:self-center rounded-sm text-md sm:text-lg  hover:bg-[#223F67] focus:bg-[#223F67] mt-12"
                    >
                      Discover more
                    </Button>
                  </div>
                </CardBody>

                {/* Footer Button */}
                {/* <CardFooter className="absolute bottom-20 left-0 right-0 flex justify-center z-10">
                 
                </CardFooter> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
