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
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { Phone } from "lucide-react";
import { Image } from "@nextui-org/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Accueil", path: "/" },
    { label: "Services", path: "/#services" },
    { label: "About us", path: "/#about" },
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
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-inherit">
            <Image
              src="/Marine_keys-logo.png"
              alt="logo"
              width={110}
              height={110}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16 text-lg" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Accueil
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base" href="/#about">
            About us
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
