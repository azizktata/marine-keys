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
          <h4 className="text-[#02446E]  mb-2"> {t("Title")} </h4>
          <h1 className="font-bold text-center text-3xl text-[#333333]  mb-16">
            {t("Subtitle")}
          </h1>
          <CarouselServices services={services.slice(0, 5)} />
          <CarouselServices services={services.slice(5, 8)} speed={3000} />
        </div>
        {/* <div className="order-1">
          <ServiceCard
            title="Maintenance"
            description="We provide a wide range of maintenance services for your yacht."
            number={1}
          />
        </div>

        <div className="relative w-full h-[350px] sm:h-auto order-2">
          <Image
            src="/yacht-management.jpg"
            alt="Marine Keys"
            fill
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
            src="/hero-2.webp"
            alt="Marine Keys"
            fill
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
            src="/workers.PNG"
            alt="Marine Keys"
            fill
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
            src="/cover-5.jpg"
            alt="Marine Keys"
            fill
            className="rounded-none object-cover  "
          />
        </div> */}
      </section>
      {/* <section id="services" className="w-full ">
        <ChooseServiceSection />
      </section> */}
      <section className="w-full mb-16 my-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E]  mb-2">{t2("RentingTitle")}</h4>
          <h1 className="font-bold text-center text-3xl text-[#333333] max-w-xs mb-4">
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
          <h4 className="text-[#02446E]  mb-2">{t2("SalesTitle")}</h4>
          <h1 className="font-bold text-center text-3xl text-[#333333] max-w-xs mb-4">
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
