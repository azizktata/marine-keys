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
  // const images = ["/hero-1.webp", "/hero-1.webp", "/cover-3.webp"];
  const boats = [
    {
      id: 1,
      nom: "Marine Keys",
      length: 42,
      image: "/hero-1.webp",
      prix: 350,
      capacity: 150,
      type: "Catamaran",
    },
    {
      id: 2,
      nom: "Ocean Breeze",
      length: 30,
      image: "/cover-5.jpg",
      prix: 200,
      capacity: 80,
      type: "Sailboat",
    },
    {
      id: 3,
      nom: "Wave Rider",
      length: 55,
      image: "/hero-2.webp",
      prix: 500,
      capacity: 200,
      type: "Yacht",
    },
    {
      id: 4,
      nom: "Blue Horizon",
      length: 38,
      image: "/vente-2.jpg",
      prix: 275,
      capacity: 120,
      type: "Speedboat",
    },
  ];
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
          {boats.map((boat, index) => (
            <CarouselItem
              className=" sm:basis-1/2 md:basis-1/3 flex justify-center items-center "
              key={index}
            >
              <BoatCard
                nom={boat.nom}
                length={42}
                image={boat.image}
                prix={boat.prix}
                capacity={boat.capacity}
                type={boat.type}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
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
