import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div className=" bg-[url('/bg-wave.jpg')] bg-cover bg-center ">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-[90%]   max-w-2xl mx-auto py-32 ">
        <div className="relative max-w-sm w-full w-full h-[300px] md:h-[400px]">
          <Image
            src="/workers.png"
            alt="Marine Keys"
            layout="fill"
            className="rounded-none object-cover  "
          />
        </div>
        <div className="flex flex-col bg-white p-8  max-w-sm md:max-w-[74ch] ">
          <p className="text-[#19B4F0] mb-2">About us</p>
          <h1 className="font-bold text-3xl text-[#333333]  mb-4 ">
            Marine Keys
          </h1>
          <p className="text-[#3B3B3B] text-base   max-w-sm md:max-w-[74ch] ">
            At Marine Kyranis we set sail with a clear vision: to redefine the
            yachting experience with professionalism, precision, and passion.
            <br />
            With years of expertise in the maritime industry, we’ve built a
            reputation for delivering world-class yachting services tailored to
            enthusiasts, owners, and aspiring seafarers alike.
          </p>
        </div>
      </div>
    </div>
  );
}
