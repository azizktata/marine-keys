import { Image } from "@nextui-org/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function ExpertiseSection() {
  const t = useTranslations("ExpertisesSection");
  return (
    <div className="flex flex-col items-center w-[90%] py-8 mx-auto ">
      <h4 className="text-[#02446E] text-xl mb-2">{t("Title")}</h4>
      <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-md mb-4">
        {t("Subtitle")}
      </h1>
      <p className="text-[#606060] text-base sm:text-lg max-w-sm ">
        {t("Description")}
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
          <h4 className="text-[#02446E] font-bold"> {t("block1.Title")}</h4>
          <p className="text-[#606060] text-base  max-w-[260px] sm:text-medium ">
            {t("block1.Description")}
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
            <h4 className="text-[#02446E] font-bold">{t("block2.Title")}</h4>
            <p className="text-[#606060] text-base sm:text-medium  max-w-[260px] ">
              {t("block2.Description")}
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
            <h4 className="text-[#02446E] font-bold">{t("block3.Title")}</h4>
            <p className="text-[#606060] text-base sm:text-medium  max-w-[260px]">
              {t("block3.Description")}
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
            <h4 className="text-[#02446E] font-bold">{t("block4.Title")}</h4>
            <p className="text-[#606060] text-base sm:text-medium max-w-[260px] ">
              {t("block4.Description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
