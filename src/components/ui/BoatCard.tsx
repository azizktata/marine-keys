import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
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
  capacity: string;
  type: string;
}) {
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
          <p className="text-sm text-gray-500"> Length</p>
          <span className="text-xs ">{length}</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500"> Capacity</p>
          <span className="text-xs">{capacity}</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500"> Type</p>
          <span className="text-xs">{type}</span>
        </div>
        <div className="flex items-center justify-between w-full gap-2 border-b py-2 border-gray-200">
          <p className="text-sm text-gray-500"> Price</p>
          <span className="text-xs">{prix}</span>
        </div>
      </CardBody>
      {/* <CardFooter className="flex justify-between items-center border-t  py-4">
      <div>
        <p className="text-xs text-gray-500">A partir de</p>
        <p className="text-lg text-gray-700 font-semibold">{prix} TND</p>
      </div>
      <Button
       
        className="bg-[#ffce5b] text-lg rounded"
      >
        Voir plus
      </Button>
    </CardFooter> */}
    </Card>
  );
}
