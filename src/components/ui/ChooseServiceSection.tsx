import React from "react";
import CarouselCards from "./CarouselCards";

export default function ChooseServiceSection() {
  return (
    <div className="bg-[url('/bg-ocean.jpg')] bg-cover bg-center ">
      <div className="bg-black/70 flex flex-col w-2/3 ml-4 md:ml-32 mx-auto px-8 py-16 ">
        <h4 className=" text-[#BFA888] text-lg ">Yachting Services</h4>
        <h1 className="text-2xl font-bold text-white">
          Choose from our services
        </h1>
        <div className="mt-8 ">
          <CarouselCards />
        </div>
      </div>
    </div>
  );
}
