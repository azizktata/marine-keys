/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@nextui-org/button";
import {
  Anchor,
  ArrowRight,
  ClipboardList,
  DropletsIcon,
  LifeBuoy,
  Sailboat,
  Search,
  Ship,
  Store,
  Wrench,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function ServiceCard({
  title,
  description,
  number,
  imageUrl,
}: {
  title: string;
  description: string;
  number: number;
  imageUrl: string;
}) {
  const t = useTranslations(`Services.Service${number}`);
  const b = useTranslations("Buttons");

  const icon =
    number === 1 ? (
      <Sailboat size={42} color="white" /> // Yacht Delivery
    ) : number === 2 ? (
      <Ship size={42} color="white" /> // Yacht Maintenance
    ) : number === 3 ? (
      <Anchor size={42} color="white" /> // Yacht Trainning
    ) : number === 4 ? (
      <ClipboardList size={42} color="white" /> // Yacht Incharge
    ) : number === 5 ? (
      <Search size={42} color="white" /> // Yacht Survey
    ) : number === 6 ? (
      <LifeBuoy size={42} color="white" /> // SoS Yachting
    ) : number === 7 ? (
      <Store size={42} color="white" /> // Sales & Renting
    ) : number === 8 ? (
      <DropletsIcon size={42} color="white" /> // Yacht Cleaning
    ) : (
      <Sailboat size={42} color="white" />
    );

  const color =
    number === 1
      ? "bg-[#9CA7DE]" // Maintenance
      : number === 2
      ? "bg-[#D9CBB8]" // Yacht Training
      : number === 3
      ? "bg-[#81AAEC]" // Yacht Delivery
      : number === 4
      ? "bg-[#9FC6C3]" // Yacht Incharge
      : number === 5
      ? "bg-[#D2A4C8]" // Yacht Survey
      : number === 6
      ? "bg-[#F6B57E]" // Sales & Renting
      : number === 7
      ? "bg-[#E06666]" // SoS Yachting
      : "bg-gray-300";

  return (
    <div className="flex flex-col md:flex-row   items-center w-full ">
      <div
        className={`flex flex-col items-start w-full   py-16 max-h-[340px] h-auto relative ${color}`}
      >
        <div className="flex flex-col items-start max-w-sm pl-4 mx-auto gap-4  ">
          <h1 className="text-white/20 text-7xl absolute top-4 left-4">
            0{number}
          </h1>{" "}
          {icon}
          <h1 className="text-2xl text-white font-semibold ">{t("Title")}</h1>
          <p className="text-white max-w-xs">{t("Description")}</p>
          <Button variant="light" className="text-white ">
            {b("Button1")}
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
      <div className="relative w-full  h-[338px] ">
        <Image
          src={imageUrl}
          alt="Marine Keys"
          fill
          className="rounded-none object-cover  "
        />
      </div>
    </div>
  );
}
