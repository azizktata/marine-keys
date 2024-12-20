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

export default function CarouselImages() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const services = [
    {
      serviceName: "Yacht Training",
      imageUrl: "/hero-1.webp",
      description:
        "Comprehensive yacht training to enhance your skills on the water.",
    },
    {
      serviceName: "Yacht Delivery",
      imageUrl: "/hero-2.webp",
      description: "Safe and timely yacht delivery to your desired location.",
    },
    {
      serviceName: "Yacht Maintenance",
      imageUrl: "/yacht-management.jpg",
      description:
        "Professional yacht maintenance services to keep your vessel in top condition.",
    },
    {
      serviceName: "Yacht Incharge",
      imageUrl: "/cover-5.jpg",
      description:
        "Experienced yacht crew for on-board management and assistance.",
    },
    {
      serviceName: "Yacht Survey",
      imageUrl: "/cover-3.webp",
      description:
        "Detailed yacht surveys to assess the condition of your vessel.",
    },
    {
      serviceName: "SoS Yachting",
      imageUrl: "/hero-1.webp",
      description: "Emergency support services for yachts in distress.",
    },
    {
      serviceName: "Sales & Renting",
      imageUrl: "/boat.webp",
      description: "Yacht sales and rental services tailored to your needs.",
    },
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-auto flex ">
        {services.map((service, index) => (
          <CarouselItem
            className=" sm:basis-1/2 md:basis-1/3 flex justify-center items-center"
            key={index}
          >
            <div className="relative group w-[400px] h-[350px]">
              {/* Image */}
              <Image
                src={service.imageUrl}
                alt="Marine Keys"
                width={350}
                height={350}
                className="rounded-none object-cover w-full h-full"
              />
              {/* Text with black overlay */}
              <div className="absolute inset-0 bg-[#223F67] bg-opacity-80 flex items-center justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="pl-4 flex flex-col gap-2">
                  <h4 className="text-white text-lg font-semibold">
                    {service.serviceName}
                  </h4>
                  <p className="text-white/90 max-w-[260px] ">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-1 transform -translate-y-1/2 z-20  p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-1 transform -translate-y-1/2 z-20  p-2  rounded-none bg-black/70 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}
