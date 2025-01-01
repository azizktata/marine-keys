import AboutSection from "@/components/ui/AboutSection";
import CarouselCards from "@/components/ui/CarouselCards";
import CarouselServices from "@/components/ui/CarouselServices";
import ExpertiseSection from "@/components/ui/ExpertiseSection";
import FlexSection from "@/components/ui/FlexSection";
import Hero from "@/components/ui/Hero";
import { services } from "@/utils/getData";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("OurServicesSection");
  const t2 = useTranslations("Sales&RentingSection");
  const b = useTranslations("Buttons");

  return (
    <main>
      <section className="w-full mb-16">
        <Hero />
      </section>
      <section className="w-[90%] mx-auto mb-16 lg:w-[80%] ">
        <FlexSection />
      </section>
      <section id="about" className="w-full mb-16">
        <AboutSection />
      </section>
      <section id="services" className="w-full flex flex-col  mb-16 ">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E] text-xl mb-2"> {t("Title")} </h4>
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333]  mb-16">
            {t("Subtitle")}
          </h1>
          <CarouselServices services={services.slice(0, 5)} />
          <CarouselServices services={services.slice(5, 8)} speed={3000} />
        </div>
      </section>

      <section className="w-full mb-16 my-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E] text-xl mb-2">{t2("RentingTitle")}</h4>
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-md mb-8">
            {t2("RentingSubtitle")}
          </h1>
          <CarouselCards />
          <Button
            variant="bordered"
            className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
          >
            {b("Button2")}
          </Button>
        </div>
      </section>
      <section className="w-full bg-[#F4F4EE] mb-16 py-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E] text-xl mb-2">{t2("SalesTitle")}</h4>
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-md mb-8">
            {t2("SalesSubtitle")}
          </h1>
          <CarouselCards />
          <Button
            variant="bordered"
            className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
          >
            {b("Button2")}
          </Button>
        </div>
      </section>
      <section className="w-full mb-16">
        <ExpertiseSection />
      </section>
    </main>
  );
}
