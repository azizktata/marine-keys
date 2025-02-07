import React from "react";
import { fetchServiceFromWP } from "@/utils/getData";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const slug = (await params).slug;
  const locale = (await params).locale;
  const fetchedData = await fetchServiceFromWP(slug, locale);
  const service = await fetchedData[0].acf.service;
  return (
    <div>
      <div id="banner" className="relative">
        <div className="relative h-96 w-full">
          <Image
            src={service.image}
            alt={`banner-${service.titre}`}
            className="object-cover w-full"
            fill
          />
          <div className="absolute inset-0 bg-black/60 "></div>
        </div>
        <div className="absolute inset-0 border z-10 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white text-3xl sm:text-4xl font-medium">
            {service.titre}
          </h1>
          <h2 className="text-[#BFA888]  font-medium text-base">
            <Link href={"/"}>Accueil</Link> / {service.titre}
          </h2>
        </div>
      </div>
      <div className="w-[90%] mx-auto py-10">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="max-w-lg xl:max-w-xl mx-auto md:w-1/2">
            <h2 className="text-2xl font-medium">{service.titre}</h2>
            <div className="prose mt-4 leading-7">
              {service.description
                .split(".")
                .map((txt: string, index: number) => (
                  <p key={index} className="pt-2">
                    {txt.trim()}
                  </p>
                ))}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-medium">Nos services incluent</h2>
              <div
                className="mt-4 leading-7 "
                dangerouslySetInnerHTML={{
                  __html: service.nos_services_incluent,
                }}
              ></div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-medium">
                Pourquoi choisir MARINE KEYS ?
              </h2>
              <div
                className="mt-4 leading-7 "
                dangerouslySetInnerHTML={{
                  __html: service.pourquoi_choisir,
                }}
              ></div>
            </div>

            <div>
              <p className="mt-4">{service.contactez_nous}</p>
            </div>
          </div>
          <div className="max-w-lg xl:max-w-xl mx-auto md:w-1/2 flex flex-col gap-8 ">
            <Image
              src={service.image}
              alt={service.titre}
              width={600}
              height={600}
            />
            <Image
              src={service.image_2}
              alt={service.titre}
              width={600}
              height={400}
              className="max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
