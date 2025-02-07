import TeamCard from "@/components/ui/TeamCard";
import { fetchAboutUsFromWP } from "@/utils/getData";
import { Component, Medal, ShipWheel, Star, Timer, Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const pageContent = await fetchAboutUsFromWP();
  const locale = (await params).locale;
  const aboutUs = pageContent[0].acf?.[`qui_sommes_nous_${locale}`];
  const ourValues = pageContent[0].acf?.[`nos_valeurs_${locale}`];
  const ourTeam = pageContent[0].acf?.[`notre_equipe_${locale}`];

  return (
    <div>
      <div className=" py-4   ">
        <div className="flex w-[90%] lg:w-[85%] max-w-2xl lg:max-w-full mx-auto flex-col gap-8 justify-center  lg:flex-row justify-between  sm:my-8 lg:my-16">
          <div className="w-full min-h-[350px] lg:w-1/3 max-w-2xl relative mx-auto ">
            <Image
              src={aboutUs.image ? aboutUs.image : "/about-img.jpg"}
              alt="Marine keys about image"
              className="w-full relative object-cover"
              fill
            />
          </div>
          <div className="w-full lg:w-[55%] max-w-2xl">
            <div className="border-l-5 border-[#2DABE3] pl-3 mb-8">
              <p className="text-gray-500 mb-2 uppercase tracking-widest ">
                {aboutUs.subtitle ? aboutUs.subtitle : null}
              </p>
              <h1 className="text-4xl  font-semibold tracking-wider">
                {aboutUs.title ? aboutUs.title : null}
              </h1>
            </div>
            <div className="text-gray-500 max-w-xl">
              <div
                className="py-2 leading-8 "
                dangerouslySetInnerHTML={{
                  __html: aboutUs.description,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          id="professionalism"
          className="flex flex-col lg:flex-row gap-2 lg:gap-8 my-8 lg:my-16 w-[90%] lg:w-[80%] mx-auto max-w-2xl lg:max-w-full"
        >
          <div
            id="card"
            className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4 md:px-8 xl:px-10 py-8 shadow-md rounded-lg"
          >
            <div className="w-20 h-20 bg-[#2DABE3] rounded-full flex justify-center items-center">
              <ShipWheel size={40} color="#ffffff" strokeWidth={1.25} />
            </div>
            <div className="text-center py-4 ">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {aboutUs?.["highlight_point_1"].title}
              </h3>
              <p className="text-gray-500 font-base">
                {aboutUs?.["highlight_point_1"].description}
              </p>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4 md:px-8 xl:px-10  py-8 shadow-md rounded-lg"
          >
            <div className="w-20 h-20 bg-[#2DABE3] rounded-full flex justify-center items-center">
              <Star size={40} color="#ffffff" strokeWidth={1.25} />
            </div>
            <div className="text-center py-4 ">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {aboutUs?.["highlight_point_2"].title}
              </h3>
              <p className="text-gray-500 font-base">
                {aboutUs?.["highlight_point_2"].description}
              </p>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4 md:px-8 xl:px-10  py-8 shadow-md rounded-lg"
          >
            <div className="w-20 h-20 bg-[#2DABE3] rounded-full flex justify-center items-center">
              <Medal size={40} color="#ffffff" strokeWidth={1.25} />
            </div>
            <div className="text-center py-4 ">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {aboutUs?.["highlight_point_3"].title}
              </h3>
              <p className="text-gray-500 font-base">
                {aboutUs?.["highlight_point_3"].description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FA] ">
          <div id="values" className="bg-[#182333] py-8 sm:py-16  ">
            <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col max-w-2xl lg:max-w-full lg:flex-row justify-between gap-8 md:gap-16 ">
              <div className=" lg:w-1/2">
                <div>
                  <div className="border-l-5 border-[#2DABE3] pl-3 mb-8">
                    <p className="text-gray-200 mb-2 uppercase tracking-widest ">
                      {ourValues.subtitle}
                    </p>
                    <h1 className="text-4xl  font-semibold tracking-wider text-white ">
                      {ourValues.title}
                    </h1>
                  </div>
                  <div
                    className="text-gray-200 leading-8 max-w-xl py-2"
                    dangerouslySetInnerHTML={{
                      __html: ourValues.description,
                    }}
                  ></div>
                </div>
                <div className="flex flex-col gap-6 mt-4 md:mt-8 sm:flex-row md:gap-8 sm:border-t-1 border-[#2DABE3] ">
                  <div className="flex items-center md:items-start gap-2 sm:border-r-1 border-[#2DABE3] pr-4 pt-4">
                    <Timer size={48} color="#2DABE3" strokeWidth={1.25} />
                    <p className="font-semibold text-white text-base">
                      {ourValues?.["highlight_point_1"].title}
                    </p>
                  </div>
                  <div className="flex items-center  md:items-start gap-2 sm:border-r-1 border-[#2DABE3] pr-4 pt-4">
                    <Trophy size={48} color="#2DABE3" strokeWidth={1.25} />
                    <p className="font-semibold text-white text-base">
                      {ourValues?.["highlight_point_2"].title}
                    </p>
                  </div>
                  <div className="flex items-center md:items-start gap-2  pt-4">
                    <Component size={48} color="#2DABE3" strokeWidth={1.25} />
                    <p className="font-semibold text-white text-base">
                      {ourValues?.["highlight_point_3"].title}
                    </p>
                  </div>
                </div>
              </div>

              <div className=" min-h-[250px] max-h-[500px] w-full lg:w-1/2   relative   ">
                <Image
                  src={ourValues.image ? ourValues.image : "/values-img.jpg"}
                  alt="notre valeurs"
                  className="w-full relative object-cover"
                  fill
                />
              </div>
            </div>
          </div>
          <div
            id="team"
            className="w-[90%] lg:w-[80%]  max-w-2xl lg:max-w-full mx-auto py-8 sm:py-16 flex flex-col gap-8 "
          >
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl tracking-wider  font-semibold mb-2">
                {ourTeam.title}
              </h1>
              <p className="text-gray-600 leading-8 max-w-xl py-2">
                {ourTeam.description}
              </p>
            </div>
            <div
              id="equipe"
              className="w-full  grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            >
              {Object.entries(ourTeam)
                .filter((teamObject) => teamObject[0].includes(`membre_`))
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map((teamMember: any, index) => (
                  <TeamCard
                    key={index}
                    name={teamMember[1].nom}
                    role={teamMember[1].role}
                    img={teamMember[1].image}
                    experience={teamMember[1].experiance}
                    linkedin={teamMember[1].linkedin}
                    mail={teamMember[1].mail}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
