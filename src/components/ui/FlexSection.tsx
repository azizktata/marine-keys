import { Image } from "@nextui-org/image";
import { CheckCircle2 } from "lucide-react";
import React from "react";

export default function FlexSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
      <div className="flex flex-col items-start  md:w-1/2">
        <p className="text-[#19B4F0] ">WE OFFER</p>
        <h1 className="font-bold text-3xl text-[#333333]  mb-2">
          Elite Yachting Services Redefined
        </h1>
        <p className="text-[#3B3B3B] text-base  sm:text-lg max-w-md mb-8">
          Discover expert yachting services with Marine Kyranis—your trusted
          partner for professional, reliable, and personalized solutions,
          whether you&apos;re a seasoned yachtsman or a first-time owner.
        </p>
        <div className="flex flex-col items-start w-full  gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={24} color="#19B4F0" />
            <p className="text-[#02446E] font-semibold text-base sm:text-lg">
              Professional Yacht Delivery
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={24} color="#19B4F0" />
            <p className="text-[#02446E] font-semibold text-base sm:text-lg">
              75% Faster Turnaround on Maintenance
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={24} color="#19B4F0" />
            <p className="text-[#02446E] font-semibold text-base sm:text-lg">
              Global Yacht Delivery Services
            </p>
          </div>
        </div>
      </div>
      <div className="flex   md:w-1/2">
        <div className=" self-end">
          <Image
            src="/hero-1.webp"
            alt="Marine Keys"
            width={600}
            height={330}
            className="rounded-none object-cover   pl-32"
          />
          <Image
            src="/hero-2.webp"
            alt="Marine Keys"
            width={510}
            height={300}
            className="rounded-none object-cover pr-32  -mt-48 sm:-mt-32"
          />
        </div>
      </div>
    </div>
  );
}
