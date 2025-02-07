"use client";
import React from "react";

import { Image } from "@nextui-org/image";
import Link from "next/link";
import { fetchServicesLocaleFromWP } from "@/utils/getData";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer({ lang }: { lang: string }) {
  const t = useTranslations("footer");
  const backup = [
    "Yacht Delivery",
    "Yacht Training",
    "SoS Yachting",
    "Yacht Cleaning",
    "Yacht Maintenance",
    "Yacht Management",
    "Sales & Renting",
    "Yacht Inspection",
  ];

  const [services, setServices] = React.useState(backup);
  React.useEffect(() => {
    const fetchServices = async () => {
      const services = await fetchServicesLocaleFromWP(lang);
      if (services.length === 0) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setServices(services.map((service: any) => service.acf.service.titre));
    };
    fetchServices();
  }, [lang]);
  return (
    <footer className="bg-[#182334] text-white py-10 px-5">
      <div className="w-[95%] max-w-7xl mx-auto grid grid-cols-1 tablette:grid-cols-2 sm-v2:grid-cols-3 laptop:grid-cols-4  items-baseline laptop:items-start  justify-between gap-8 gap-y-16 xl:gap-8">
        {/* Logo and Socials */}
        <div className="sm:col-span-full  laptop:col-span-1 flex flex-col items-start">
          <Image src="/logo.png" alt="logo" width={150} height={100} />
          <h3 className="mt-4 text-lg font-semibold border-l-4 border-blue-500 pl-2 uppercase">
            {t("follow-us")}
          </h3>
          <div className="flex space-x-4 mt-2 text-gray-400 mt-6 ml-2">
            <Instagram
              size={20}
              className="cursor-pointer hover:text-white transition-colors"
            />
            <Facebook
              size={20}
              className="cursor-pointer hover:text-white transition-colors"
            />
            <Linkedin
              size={20}
              className="cursor-pointer hover:text-white transition-colors"
            />
          </div>
        </div>

        {/* Products */}
        <div className=" ">
          <h3 className="text-xl uppercase font-semibold border-l-4 border-blue-500 pl-2">
            {t("our-services")}
          </h3>
          <ul className=" text-sm grid grid-cols-1   ml-2 mt-6  gap-y-4 xl:gap-4 ">
            {services.toReversed().map((service: string, index: number) => (
              <li className="text-gray-200 " key={index}>
                <Link
                  href={`/${lang}/services/${service
                    .split(" ")
                    .join("-")
                    .toLowerCase()}
                      `}
                  className="hover:text-[#2DABE3] uppercase transition-colors text-sm"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full    flex flex-col">
          <h3 className="text-xl uppercase font-semibold border-l-4 border-blue-500 pl-2 mb-4">
            {t("about-us")}
          </h3>
          <div className="flex  flex-col gap-4 ml-2 items-start text-gray-300">
            <Link
              href={`/${lang}/about-us`}
              className="hover:text-[#2DABE3] uppercase transition-colors text-sm cursor-pointer "
            >
              {t("who-we-are")}
            </Link>
            <Link
              href={`/${lang}/about-us#values`}
              className="hover:text-[#2DABE3] uppercase transition-colors text-sm cursor-pointer"
            >
              {t("our-values")}
            </Link>
            <Link
              href={`/${lang}/about-us#team`}
              className="hover:text-[#2DABE3] uppercase transition-colors text-sm cursor-pointer"
            >
              {t("our-team")}
            </Link>
          </div>
        </div>
        {/* Contact Section */}
        <div className="w-full    flex flex-col">
          <h3 className="text-xl uppercase font-semibold border-l-4 border-blue-500 pl-2 mb-4">
            {t("our-contact")}
          </h3>
          <div className=" flex  flex-col gap-4 md:flex-row md:gap-8 items-start">
            {/* <iframe
              className="w-full h-60"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373631531593!3d-37.81627937975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f91f47%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633044003456!5m2!1sen!2sus"
              allowFullScreen={false}
              loading="lazy"
            ></iframe> */}
            <div className="flex flex-col gap-4 font-light ml-2">
              {/* <div className="mt-4 text-gray-300 flex items-start gap-2">
                <MapPinIcon size={16} /> Avenue de l’environnement port de pêche
                - Tunisie
              </div> */}
              {/* <p className="text-gray-300">📞 (+216) 36 405 900</p> */}
              <div className="text-gray-300 flex items-center gap-2">
                <Phone size={16} /> (+216) 98 797 410
              </div>
              <div className="text-gray-300 flex items-center gap-2">
                <Mail size={16} /> contact@marinekeys.com
              </div>
              {/* <button className="mt-4 border self-start border-white px-4 py-2 rounded-md hover:bg-white transition-colors hover:text-[#0C1A2A]">
                Contactez Nous
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
