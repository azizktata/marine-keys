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

import { Button } from "@nextui-org/button";

import { Phone } from "lucide-react";
import { Image } from "@nextui-org/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Switch } from "@nextui-org/switch";
import { usePathname, useRouter } from "next/navigation";
import handleLocaleToggle from "@/utils/handleLocaleToggle";

export default function Header({ lang }: { lang: string }) {
  const t = useTranslations("navLinks");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuItems = [
    { label: t("home"), path: "/" },
    { label: t("about"), path: "/#about" },
    { label: t("services"), path: "/#services" },
  ];
  const handleWhatsAppCall = () => {
    const phoneNumber = "21698797410";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };
  return (
    <Navbar
      className="py-2"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
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

      <NavbarContent className="hidden sm:flex gap-16 text-lg" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            {t("home")}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/#services">
            {t("services")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base" href="/#about">
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
            <span>+216 98 797 410</span>
          </Button>
        </NavbarItem>

        <NavbarItem className="flex">
          <Switch
            defaultSelected={lang === "en"} // Ensures it reflects the current language
            color="primary"
            size="lg"
            onChange={() => {
              const newLang = lang === "en" ? "fr" : "en";
              if (pathname.match(/\/services\/.+/)) {
                const newPath = handleLocaleToggle(pathname);

                console.log(newPath);
                router.push(`/${newLang}/${newPath}`);
              } else {
                router.push(`./${newLang}`);
              }
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
      <NavbarMenu className="flex flex-col  gap-8 pt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            onClick={handleMenuItemClick}
            key={`${item}-${index}`}
            className="border-b border-gray-300 pb-2 w-auto"
          >
            <Link
              className="w-auto text-xl"
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
      </NavbarMenu>
    </Navbar>
  );
}
