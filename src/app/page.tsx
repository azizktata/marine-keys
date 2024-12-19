import AboutSection from "@/components/ui/AboutSection";
import CarouselCards from "@/components/ui/CarouselCards";
import ChooseServiceSection from "@/components/ui/ChooseServiceSection";
import ExpertiseSection from "@/components/ui/ExpertiseSection";
import FlexSection from "@/components/ui/FlexSection";
import Hero from "@/components/ui/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-full mb-16">
        <Hero />
      </section>
      <section className="w-[90%] mx-auto mb-16 lg:w-[80%] ">
        <FlexSection />
      </section>
      <section className="w-full mb-16">
        <AboutSection />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-stretch mb-16 ">
        <div className="order-1">
          <ServiceCard
            title="Maintenance"
            description="We provide a wide range of maintenance services for your yacht."
            number={1}
          />
        </div>

        <div className="relative w-full h-[350px] sm:h-auto order-2">
          <Image
            src="/workers.png"
            alt="Marine Keys"
            layout="fill"
            className="rounded-none object-cover  "
          />
        </div>
        <div className="order-3 sm:order-4 md:order-3">
          <ServiceCard
            title="Delivery"
            description="We offer yacht delivery services to any location of your choice."
            number={2}
          />
        </div>

        <div className="relative w-full h-[350px] sm:h-auto order-4 sm:order-3 md:order-4">
          <Image
            src="/workers.png"
            alt="Marine Keys"
            layout="fill"
            className="rounded-none object-cover  "
          />
        </div>
        <div className="order-5  md:order-6">
          <ServiceCard
            title="Trainning"
            description="We provide yacht trainning services to help you maintain your yacht."
            number={3}
          />
        </div>

        <div className="relative w-full h-[350px] sm:h-auto order-6 sm:order-5 ">
          <Image
            src="/workers.png"
            alt="Marine Keys"
            layout="fill"
            className="rounded-none object-cover  "
          />
        </div>
        <div className="order-7 sm:order-8 ">
          <ServiceCard
            title="Survey"
            description="Platform estimation, surveys, and comprehensive inspection reports tailored to your yacht’s needs"
            number={4}
          />
        </div>

        <div className="relative w-full h-[350px] sm:h-auto order-8 sm:order-7 ">
          <Image
            src="/workers.png"
            alt="Marine Keys"
            layout="fill"
            className="rounded-none object-cover  "
          />
        </div>
      </section>
      <section className="w-full ">
        <ChooseServiceSection />
      </section>
      <section className="w-full mb-16 my-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E]  mb-2">P2P RENTING</h4>
          <h1 className="font-bold text-center text-3xl text-[#333333] max-w-xs mb-4">
            Featured Boats
          </h1>
          <CarouselCards />
          <Button
            variant="bordered"
            className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
          >
            Voir plus
          </Button>
        </div>
      </section>
      <section className="w-full bg-[#F4F4EE] mb-16 py-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E]  mb-2">FOR SALES</h4>
          <h1 className="font-bold text-center text-3xl text-[#333333] max-w-xs mb-4">
            Featured Boats
          </h1>
          <CarouselCards />
          <Button
            variant="bordered"
            className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
          >
            Voir plus
          </Button>
        </div>
      </section>
      <section className="w-full mb-16">
        <ExpertiseSection />
      </section>
    </main>
  );
}
