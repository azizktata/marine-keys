import AboutSection from "@/components/ui/AboutSection";
import CarouselCards from "@/components/ui/CarouselCards";
import CarouselServices from "@/components/ui/CarouselServices";
import ExpertiseSection from "@/components/ui/ExpertiseSection";
import FlexSection from "@/components/ui/FlexSection";
import Hero from "@/components/ui/Hero";
import { fetchDataFromWP } from "@/utils/getData";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const pageContent = await fetchDataFromWP();
  const locale = (await params).locale;
  const hero = pageContent[0].acf?.[`herosection_${locale}`];
  const weOffer = pageContent[0].acf?.[`weoffersection_${locale}`];
  const about = pageContent[0].acf?.[`aboutsection_${locale}`];
  const ourServices = pageContent[0].acf?.[`ourservicessection_${locale}`];
  const services = Object.values(
    pageContent[0].acf?.[`services_${locale}`]
  ) as { title: string; description: string; image: string; number: number }[];
  const sales_renting = pageContent[0].acf?.[`sales&rentingsection_${locale}`];
  const expertise = pageContent[0].acf?.[`expertisessection_${locale}`];
  return (
    <main>
      <section className="w-full mb-16">
        <Hero hero={hero} />
      </section>
      <section className="w-[90%] mx-auto mb-16 lg:w-[80%] ">
        <FlexSection weOffer={weOffer} services={services} locale={locale} />
      </section>
      <section id="about" className="w-full mb-16">
        <AboutSection about={about} />
      </section>
      <section id="services" className="w-full flex flex-col  mb-16 ">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E] text-xl mb-4"> {ourServices.title} </h4>
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333]  mb-16">
            {ourServices.subtitle}
          </h1>
          <CarouselServices services={services.slice(0, 5)} locale={locale} />
          <CarouselServices
            services={services.slice(5, 8)}
            speed={3000}
            locale={locale}
          />
        </div>
      </section>

      <section className="w-full mb-16 my-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E] text-xl mb-4">
            {sales_renting.rentingtitle}
          </h4>
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-md mb-8">
            {sales_renting.rentingsubtitle}
          </h1>
          <CarouselCards />
        </div>
      </section>
      <section className="w-full bg-[#F4F4EE] mb-16 py-16">
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-[#02446E] text-xl mb-4">
            {sales_renting.salestitle}
          </h4>
          <h1 className="font-bold text-center text-3xl md:text-5xl text-[#333333] max-w-md mb-8">
            {sales_renting.salessubtitle}
          </h1>
          <CarouselCards />
        </div>
      </section>

      <section className="w-full mb-16">
        <ExpertiseSection expertise={expertise} />
      </section>
    </main>
  );
}
