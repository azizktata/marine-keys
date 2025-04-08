"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

import { ChevronDown, Phone } from "lucide-react";
import { Image } from "@nextui-org/image";
import { useTranslations } from "next-intl";
import { Switch } from "@nextui-org/switch";
import { usePathname, useRouter } from "next/navigation";
import handleLocaleToggle from "@/utils/handleLocaleToggle";
import { fetchServicesLocaleFromWP } from "@/utils/getData";
import Link from "next/link";

export default function Header({ lang }: { lang: string }) {
  const t = useTranslations("navLinks");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuItems = [
    { label: t("home"), path: "/" },
    { label: t("about"), path: `${lang}/about-us/` },
  ];
  const handleWhatsAppCall = () => {
    const phoneNumber = "21624964799";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  const [isOpen, setIsOpen] = React.useState(false);
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
    <Navbar
      className="py-2 bg-[#F3F7F9]"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered={true}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="hidden sm:flex">
          <Link href={"/"} className="font-bold text-inherit">
            <Image src="/logo.png" alt="logo" width={125} height={70} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-8 lg:gap-16"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            className="hover:text-[#2DABE3] transition-colors "
            href="/"
          >
            {t("home")}
          </Link>
        </NavbarItem>

        <Dropdown radius="none" className="bg-[#F3F7F9] p-0" isOpen={isOpen}>
          <NavbarItem className="cursor-pointer">
            <DropdownTrigger>
              <button
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
                className="flex gap-2 items-center text-gray-900 hover:text-[#2DABE3] transition-colors"
              >
                {t("services")} <ChevronDown size={16} />
              </button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Marine keys services"
            className="w-full text-left flex   rounded-none"
            onMouseLeave={() => {
              setIsOpen(false);
            }}
            variant="flat"
            itemClasses={{
              base: [
                "rounded-none",
                "text-default-800",
                "transition-opacity",
                "data-[hover=true]:text-[#2DBDEE]",

                "data-[hover=true]:bg-white",
                "py-3",
                "px-4",
                "border-b",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
              ],
            }}
          >
            {services.toReversed().map((service, index) => (
              // <DropdownSection className=" hover:text-[#2DBDEE]  " key={index}>
              <DropdownItem
                key={index}
                title={service}
                onPress={() => {
                  router.push(`/${lang}/services/${service
                    .split(" ")
                    .join("-")
                    .toLowerCase()}
                  `);
                }}
              >
                {service}
              </DropdownItem>
              // </DropdownSection>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            className=" hover:text-[#2DABE3] transition-colors"
            href={`/${lang}/about-us`}
          >
            {t("about")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="flex gap-2 text-[#EAA30B] border-[#EAA30B]"
            href="#"
            variant="bordered"
            onPress={handleWhatsAppCall}
          >
            <Phone size={16} />
            <span>+216 24 964 799</span>
          </Button>
        </NavbarItem>

        <NavbarItem className="flex">
          <Switch
            defaultSelected={lang === "en"} // Ensures it reflects the current language
            color="primary"
            // className="text-[#2DBDEE] color-[#2DBDEE] "
            size="lg"
            onChange={() => {
              const newLang = lang === "en" ? "fr" : "en";
              let newPath = pathname.slice(3);
              if (pathname.match(/\/services\/.+/)) {
                newPath = handleLocaleToggle(pathname);
              }
              // console.log(newPath);
              router.push(`/${newLang}/${newPath}`, { scroll: false });
            }}
            thumbIcon={({ isSelected }) =>
              isSelected ? (
                <Image
                  src="https://flagcdn.com/us.svg"
                  alt="English"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              ) : (
                <Image
                  src="https://flagcdn.com/fr.svg"
                  alt="French"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              )
            }
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col bg-white gap-4 pt-8">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            onClick={handleMenuItemClick}
            key={`${item}-${index}`}
            className="border-b border-gray-100 pb-2 w-auto"
          >
            <Link
              className="w-auto text-lg"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        {services.map((service, index) => (
          <NavbarMenuItem
            onClick={handleMenuItemClick}
            key={`${index}`}
            className="border-b border-gray-100 pb-2 w-auto"
          >
            <Link
              href={`/${lang}/services/${service
                .split(" ")
                .join("-")
                .toLowerCase()}
                      `}
              className=" text-lg "
            >
              {service}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
