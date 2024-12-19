import AboutSection from "@/components/ui/AboutSection";
import ChooseServiceSection from "@/components/ui/ChooseServiceSection";
import ExpertiseSection from "@/components/ui/ExpertiseSection";
import FlexSection from "@/components/ui/FlexSection";
import Hero from "@/components/ui/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mb-16">
        <div className="order-1">
          <ServiceCard />
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
          <ServiceCard />
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
          <ServiceCard />
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
          <ServiceCard />
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
      <section className="w-full mb-16">
        <ChooseServiceSection />
      </section>
      <section className="w-full mb-16">
        <ExpertiseSection />
      </section>
    </main>
  );
}
