import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { useTranslations } from "next-intl";
export default function BoatCard({
  nom,
  length,
  image,
  prix,
  capacity,
  type,
}: {
  nom: string;
  length: number;
  image: string;
  prix: number;
  capacity: number;
  type: string;
}) {
  const t = useTranslations("boatCard");

  return (
    <Card className=" m-4 w-full rounded-none">
      <CardHeader className="overflow-visible w-full h-[260px] p-0 ">
        <Image
          alt="Card background"
          className="object-cover w-full h-full "
          src={image}
          removeWrapper
          radius="none"
        />
      </CardHeader>
      <CardBody className="py-8 px-4 flex-col items-start gap-2">
        <h3 className="text-xl text-black">{nom}</h3>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500 capitalize"> {t("length")}</p>
          <span className="text-xs ">{length}</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500 capitalize"> {t("capacity")}</p>
          <span className="text-xs">{capacity}</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500 capitalize"> {t("type")}</p>
          <span className="text-xs">{type}</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500 capitalize"> {t("price")}</p>
          <span className="text-xs">{prix}</span>
        </div>
      </CardBody>
    </Card>
  );
}
