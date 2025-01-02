import React from "react";
import CarouselImages from "./CarouselImages";
import { useTranslations } from "next-intl";

export default function ChooseServiceSection({
  services,
}: {
  services: {
    title: string;
    description: string;
    image: string;
    number: number;
  }[];
}) {
  const t = useTranslations("chooseServiceSection");
  return (
    <div className="bg-[url('/bg-ocean.jpg')] bg-cover bg-center w-full">
      {/* <div className="bg-black/70 flex flex-col w-4/5 md:w-2/3 ml-4 md:ml-16 lg:ml-32 mx-auto px-8 py-16 "> */}
      <div className="bg-black/70 flex flex-col w-[85%] sm:w-4/5 ml-4 sm:ml-8 md:ml-4 md:w-[90%] lg:ml-8 lg:w-4/5  mx-auto px-8 py-16 ">
        <h4 className=" text-[#BFA888] text-lg ">{t("Title")}</h4>
        <h1 className="text-3xl font-bold text-white">{t("Subtitle")}</h1>
        <div className="mt-8 ">
          <CarouselImages services={services} />
        </div>
      </div>
    </div>
  );
}
