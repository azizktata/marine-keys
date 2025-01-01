import { Image } from "@nextui-org/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function ExpertiseSection({
  expertise,
}: {
  expertise: {
    title: string;
    subtitle: string;
    description: string;
    block1: {
      title: string;
      description: string;
    };
    block2: {
      title: string;
      description: string;
    };
    block3: {
      title: string;
      description: string;
    };
    block4: {
      title: string;
      description: string;
    };
  };
}) {
  return (
    <div className="flex flex-col items-center w-[90%] py-8 mx-auto ">
      <h4 className="text-[#02446E] text-xl mb-2">{expertise.title}</h4>
      <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-lg mb-4">
        {expertise.subtitle}
      </h1>
      <p className="text-[#606060] text-base sm:text-lg max-w-sm ">
        {expertise.description}
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-8 mt-24">
        <div className="flex flex-col items-start gap-2  max-w-xs mx-auto">
          <Image
            src="/Boat.svg"
            alt="Marine Keys"
            width={64}
            height={64}
            className="rounded-none object-cover"
          />
          <h4 className="text-[#02446E] font-bold">
            {" "}
            {expertise.block1.title}
          </h4>
          <p className="text-[#606060] text-base  max-w-[260px] sm:text-medium ">
            {expertise.block1.description}
          </p>
        </div>
        <div className="hidden lg:block">
          <Separator orientation="vertical" style={{ height: "160px" }} />
        </div>
        <div className="block md:hidden text-center self-start">
          <Separator orientation="horizontal" style={{ width: "160px" }} />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col items-start max-w-xs mx-auto  gap-2">
            <Image
              src="/Package.svg"
              alt="Marine Keys"
              width={64}
              height={64}
              className="rounded-none object-cover"
            />
            <h4 className="text-[#02446E] font-bold">
              {expertise.block2.title}
            </h4>
            <p className="text-[#606060] text-base sm:text-medium  max-w-[260px] ">
              {expertise.block2.description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2  max-w-[260px] mx-auto">
            <Image
              src="/Info.svg"
              alt="Marine Keys"
              width={64}
              height={64}
              className="rounded-none object-cover"
            />
            <h4 className="text-[#02446E] font-bold">
              {expertise.block3.title}
            </h4>
            <p className="text-[#606060] text-base sm:text-medium  max-w-[260px]">
              {expertise.block3.description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-2  max-w-[260px] mx-auto">
            <Image
              src="/globe.svg"
              alt="Marine Keys"
              width={64}
              height={64}
              className="rounded-none object-cover"
            />
            <h4 className="text-[#02446E] font-bold">
              {expertise.block4.title}
            </h4>
            <p className="text-[#606060] text-base sm:text-medium max-w-[260px] ">
              {expertise.block4.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
