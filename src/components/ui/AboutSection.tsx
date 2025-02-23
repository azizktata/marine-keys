import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  const t = useTranslations("AboutSection");
  return (
    <div className=" bg-[url('/bg-wave.jpg')] bg-cover bg-center ">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-[90%]   max-w-2xl mx-auto py-32 ">
        <div className="relative max-w-sm w-full h-[300px] md:h-[400px] ">
          <Image
            src="/workers.PNG"
            alt="Marine Keys"
            fill
            className="rounded-none object-cover  "
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 400px"
          />
        </div>
        <div className="flex flex-col bg-white p-8  max-w-sm md:max-w-[74ch] ">
          <p className="text-[#19B4F0] mb-1"> {t("Title")} </p>
          <h1 className="font-bold text-3xl lg:text-4xl text-[#333333]  mb-4 ">
            {t("Subtitle")}
          </h1>
          <p className="text-[#3B3B3B] text-base max-w-sm md:max-w-[74ch] leading-relaxed tracking-wide">
            {t("Description")}
          </p>
        </div>
      </div>
    </div>
  );
}
// At{" "}
// <span className="font-semibold text-[#1E2A47]">Marine Kyranis</span>{" "}
// we set sail with a clear vision: to redefine the yachting experience
// with{" "}
// <span className="font-semibold text-[#1E2A47]">
//   professionalism, precision, and passion
// </span>
// .
// <br />
// With years of expertise in the maritime industry, we’ve built a
// reputation for delivering world-class yachting services tailored to
// enthusiasts, owners, and aspiring seafarers alike.
