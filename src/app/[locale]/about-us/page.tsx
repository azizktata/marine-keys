import { Medal, ShipWheel, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" py-4   ">
        <div className="flex w-[90%] lg:w-[85%]  mx-auto flex-col  lg:flex-row justify-between  lg:my-16">
          <div className="w-full min-h-[350px] lg:w-1/3 max-w-xl relative mx-auto ">
            <Image
              src="/about-img.jpg"
              alt="French"
              className="w-full relative object-cover"
              fill
            />
          </div>
          <div className="w-full lg:w-[55%] ">
            <div className="border-l-5 border-[#2DABE3] pl-3 mb-8">
              <p className="text-gray-500 mb-2 uppercase tracking-widest ">
                A propos Marine Keys
              </p>
              <h1 className="text-4xl  font-semibold tracking-wider">
                Redifining yachting Services
              </h1>
            </div>
            <div className="text-gray-500 max-w-xl">
              <p className="leading-8 py-2">
                Marine Keys est une entreprise d&apos;excellence dans le domaine
                du yachting, offrant des services haut de gamme pour les
                passionnés de navigation. Forts d&apos;une expertise reconnue et
                d&apos;une équipe de professionnels qualifiés, nous nous
                engageons à fournir des solutions sur mesure pour chaque
                propriétaire de yacht. Que ce soit pour la livraison,
                l&apos;entretien, la gestion, la formation ou l&apos;assistance
                en mer, Marine Keys garantit un service fiable, sécurisé et
                adapté à vos besoins.
              </p>
              <p className="leading-8 py-2">
                Notre engagement envers la satisfaction client, notre réactivité
                et notre passion pour le monde maritime nous permettent de vous
                offrir un service haut de gamme, digne des plus grandes
                exigences. Faire confiance à Marine Keys, c&apos;est opter pour
                une expertise inégalée, un accompagnement sur-mesure et une
                expérience de yachting sans compromis.
              </p>
            </div>
          </div>
        </div>

        <div
          id="professionalism"
          className="flex flex-col md:flex-row gap-2 lg:gap-8 my-8 lg:my-16 w-[90%] lg:w-[85%] mx-auto"
        >
          <div
            id="card"
            className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4 lg:px-10 py-8 shadow-md rounded-lg"
          >
            <div className="w-20 h-20 bg-[#2DABE3] rounded-full flex justify-center items-center">
              <ShipWheel size={40} color="#ffffff" strokeWidth={1.25} />
            </div>
            <div className="text-center py-4 ">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Garder votre yacht en parfait état
              </h3>
              <p className="text-gray-500 font-base">
                Votre partenaire de confiance pour des solutions de yachting{" "}
              </p>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4 lg:px-10 py-8 shadow-md rounded-lg"
          >
            <div className="w-20 h-20 bg-[#2DABE3] rounded-full flex justify-center items-center">
              <Star size={40} color="#ffffff" strokeWidth={1.25} />
            </div>
            <div className="text-center py-4 ">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Équipages qualifiés et expérimentés
              </h3>
              <p className="text-gray-500 font-base">
                Des professionnels certifiés à votre service.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col justify-center items-center w-full lg:w-1/3 px-4 lg:px-10 py-8 shadow-md rounded-lg"
          >
            <div className="w-20 h-20 bg-[#2DABE3] rounded-full flex justify-center items-center">
              <Medal size={40} color="#ffffff" strokeWidth={1.25} />
            </div>
            <div className="text-center py-4 ">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Elite yachting services
              </h3>
              <p className="text-gray-500 font-base">
                Service rapide professionnel et axé sur la satisfaction client
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F9FA] ">
          <div className="w-[90%] lg:w-[85%] mx-auto py-8 lg:py-16">
            <h1 className="text-2xl tracking-wider  font-semibold mb-2">
              Nos missions
            </h1>
            <p className="text-gray-600 leading-8 max-w-xl py-2">
              Chez Marine Keys, notre mission est de révolutionner
              l&apos;expérience du yachting en offrant des services
              personnalisés qui allient qualité, expertise et innovation. Nous
              nous efforçons d&apos;apporter une valeur ajoutée à chaque détail
              de nos prestations, garantissant une navigation sereine et un
              accompagnement optimal pour nos clients. Notre objectif est de
              rendre l&apos;univers du yachting plus accessible, plus
              confortable et totalement dépourvu de soucis, grâce à notre
              engagement envers l&apos;excellence.
            </p>
          </div>

          <div id="nos-valeurs" className="bg-[#2DABE3] py-8 lg:py-16 ">
            <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row justify-between gap-8 ">
              <div className=" md:w-1/2">
                <h1 className="text-2xl tracking-wider text-white font-semibold mb-2">
                  Les valeurs qui nous gouvernent
                </h1>
                <p className="text-gray-100 leading-8 max-w-xl py-2">
                  L&apos;excellence est au cœur de notre engagement. Nous
                  mettons tout en œuvre pour offrir des prestations haut de
                  gamme, avec pour priorité la satisfaction totale de nos
                  clients. Chaque service que nous proposons est pensé pour
                  répondre aux plus hautes exigences et garantir une expérience
                  unique. le service client premium est notre priorité absolue.
                  L&apos;écoute et la réactivité sont au centre de notre
                  approche. Nous nous assurons que chaque client bénéficie
                  d&apos;un accompagnement personnalisé et de solutions sur
                  mesure, adaptées à ses attentes et à ses exigences
                  spécifiques.
                </p>
              </div>

              <div className=" min-h-[250px] max-h-[300px] md:w-1/2   relative lg:-mt-48  ">
                <Image
                  src="/boat.webp"
                  alt="French"
                  className="w-full relative object-cover"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="w-[90%] lg:w-[85%] mx-auto py-8 lg:py-16 flex flex-col gap-8 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl tracking-wider  font-semibold mb-2">
                Nos Equipes
              </h1>
              <p className="text-gray-600 leading-8 max-w-xl py-2">
                Marine Keys repose sur une équipe de professionnels passionnés
                et hautement qualifiés. Nos experts en yachting, techniciens et
                formateurs travaillent main dans la main pour assurer des
                services d&apos;une qualité exceptionnelle. Chaque membre de
                notre personnel est dédié à fournir un accompagnement
                personnalisé, garantissant une expérience client unique et
                sur-mesure.
              </p>
            </div>
            <div
              id="equipe"
              className="w-full lg:w-1/2 grid gap-2 grid-cols-1 xs:grid-cols-3 "
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full relative w-32 h-32 bg-[#2DABE3] ">
                  <Image
                    src="/workers.PNG"
                    alt="team"
                    className="rounded-full relative w-full object-cover"
                    fill
                  />
                </div>
                <div className="text-center my-2">
                  <h3 className="text-lg font-medium text-[#2DABE3] ">
                    John Doe
                  </h3>
                  <p className="font-light text-gray-400">CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full relative w-32 h-32 bg-[#2DABE3] ">
                  <Image
                    src="/workers.PNG"
                    alt="team"
                    className="rounded-full relative w-full object-cover"
                    fill
                  />
                </div>
                <div className="text-center my-2">
                  <h3 className="text-lg font-medium text-[#2DABE3] ">
                    John Doe
                  </h3>
                  <p className="font-light text-gray-400">CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full relative w-32 h-32 bg-[#2DABE3] ">
                  <Image
                    src="/workers.PNG"
                    alt="team"
                    className="rounded-full relative w-full object-cover"
                    fill
                  />
                </div>
                <div className="text-center my-2">
                  <h3 className="text-lg font-medium text-[#2DABE3] ">
                    John Doe
                  </h3>
                  <p className="font-light text-gray-400">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
