import { CheckCircle2 } from "lucide-react";
import React from "react";
import ChooseServiceSection from "./ChooseServiceSection";

export default function FlexSection({
  weOffer,
  services,
  locale,
}: {
  weOffer: {
    title: string;
    subtitle: string;
    description: string;
    checkpoint1: string;
    checkpoint2: string;
    checkpoint3: string;
  };
  services: {
    title: string;
    description: string;
    image: string;
    number: number;
  }[];
  locale: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
      <div className="flex flex-col items-start  md:w-1/2">
        <p className="text-[#19B4F0] uppercase"> {weOffer.subtitle} </p>
        <h1 className="font-bold text-5xl text-[#333333]  mb-2">
          {weOffer.title}
        </h1>
        <p className="text-[#3B3B3B] text-base  sm:text-lg max-w-lg mb-8">
          {weOffer.description}
        </p>
        <div className="flex flex-col items-start w-full  gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={24} color="#19B4F0" />
            <p className="text-[#02446E] font-semibold text-base sm:text-lg">
              {weOffer.checkpoint1}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={24} color="#19B4F0" />
            <p className="text-[#02446E] font-semibold text-base sm:text-lg">
              {weOffer.checkpoint2}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={24} color="#19B4F0" />
            <p className="text-[#02446E] font-semibold text-base sm:text-lg">
              {weOffer.checkpoint3}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 ">
        <ChooseServiceSection services={services} locale={locale} />
      </div>
    </div>
  );
}
