import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function TeamCard({
  name,
  role,
  img,
  experience,
  linkedin,
  mail,
}: {
  name: string;
  role: string;
  img: string;
  experience: string;
  linkedin: string;
  mail: string;
}) {
  return (
    <div className="flex flex-col items-center px-4 py-8 shadow-md rounded-xl hover:shadow-lg hover:bg-[#06212D] transition-shadow transition-background duration-300">
      <div className="rounded-full relative w-32 h-32 bg-[#2DABE3] ">
        <Image
          src={img ? img : "/workers.PNG"}
          alt={`image de ${name}`}
          className="rounded-full relative w-full object-cover"
          fill
        />
      </div>
      <div className="text-center mt-4 flex flex-col ">
        <h3 className="text-base tracking-tight font-bold text-[#15749E] ">
          {name ? name : "John Doe"}
        </h3>
        <p className="font-base text-sm text-[#2DABE3] tracking-wide mb-3">
          {role ? role : "CEO"}
        </p>

        <p className="text-sm text-gray-400 font-light leading-6">
          {/* +12 ans d&apos;experiance, entrpeneur et developement de
        logiciel */}
          {experience ? experience : "+12 ans experiance"}
        </p>

        <div className="flex justify-center items-center gap-4 mt-4">
          <a
            target="blank"
            href={linkedin}
            // href="https://www.linkedin.com/in/arous-ramzi-31489b5a/"
          >
            <Linkedin
              size={16}
              className="text-gray-500 cursor-pointer hover:text-[#2DABE3] transition-colors"
            />
          </a>
          <a href={`mailto:${mail}`}>
            <Mail
              size={16}
              className="text-gray-500 cursor-pointer hover:text-[#2DABE3] transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
