import { Button } from "@nextui-org/button";
import { Anchor } from "lucide-react";
import React from "react";

export default function ServiceCard() {
  return (
    <div className="flex flex-col items-start w-full border py-16 max-h-auto relative bg-[#9CA7DE]  ">
      <div className="flex flex-col items-start max-w-sm pl-4 mx-auto gap-4">
        <h1 className="text-white/20 text-7xl absolute top-4 left-4">01</h1>{" "}
        <Anchor size={42} color="white" />
        <h1 className="text-2xl text-white font-semibold ">Maintenace</h1>
        <p className="text-white max-w-xs">
          We offer the best maintenance services for your yacht. We provide 75%
          faster turnaround on maintenance services.
        </p>
        <Button variant="bordered" className="text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
}
