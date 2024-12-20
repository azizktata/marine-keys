import { Image } from "@nextui-org/image";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function ExpertiseSection() {
  return (
    <div className="flex flex-col items-center w-[90%] py-8 mx-auto ">
      <h4 className="text-[#02446E]  mb-2">Marine Keys</h4>
      <h1 className="font-bold text-center text-3xl text-[#333333] max-w-xs mb-4">
        The best solution for your yacht
      </h1>
      <p className="text-[#606060] text-base sm:text-lg max-w-sm ">
        Why Choose Marine Kyranis?{" "}
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
          <h4 className="text-[#02446E] font-bold">Expert Team</h4>
          <p className="text-[#606060] text-base  max-w-[260px] sm:text-medium ">
            Decades of experience in the yachting industry.
          </p>
        </div>
        <div className="hidden md:block">
          <Separator orientation="vertical" style={{ height: "160px" }} />
        </div>
        <div className=" md:hidden">
          <Separator />
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
            <h4 className="text-[#02446E] font-bold">Personalized Service</h4>
            <p className="text-[#606060] text-base sm:text-medium  max-w-[260px] ">
              Tailored solutions to meet your unique needs.
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
            <h4 className="text-[#02446E] font-bold">24/7 Support</h4>
            <p className="text-[#606060] text-base sm:text-medium  max-w-[260px]">
              Always available for your peace of mind.
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
            <h4 className="text-[#02446E] font-bold">Global Reach</h4>
            <p className="text-[#606060] text-base sm:text-medium max-w-[260px] ">
              Serving clients worldwide with professionalism and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
