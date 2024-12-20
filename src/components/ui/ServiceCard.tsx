import { Button } from "@nextui-org/button";
import {
  Anchor,
  ArrowRight,
  ClipboardList,
  DropletsIcon,
  Sailboat,
} from "lucide-react";
import React from "react";

export default function ServiceCard({
  title,
  description,
  number,
}: {
  title: string;
  description: string;
  number: number;
}) {
  const icon =
    number === 1 ? (
      <DropletsIcon size={42} color="white" />
    ) : number === 2 ? (
      <Sailboat size={42} color="white" />
    ) : number === 3 ? (
      <Anchor size={42} color="white" />
    ) : (
      <ClipboardList size={42} color="white" />
    );
  const color =
    number === 1
      ? "bg-[#9CA7DE]"
      : number === 2
      ? "bg-[#D9CBB8]"
      : number === 3
      ? "bg-[#81AAEC]"
      : "bg-[#9FC6C3]";
  return (
    <div
      className={`flex flex-col items-start w-full  py-16 max-h-[340px] h-auto relative ${color}`}
    >
      <div className="flex flex-col items-start max-w-sm pl-4 mx-auto gap-4  ">
        <h1 className="text-white/20 text-7xl absolute top-4 left-4">
          0{number}
        </h1>{" "}
        {icon}
        <h1 className="text-2xl text-white font-semibold ">{title}</h1>
        <p className="text-white max-w-xs">{description}</p>
        <Button variant="light" className="text-white ">
          Learn More
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
