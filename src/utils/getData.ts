import { cache } from "react";

  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  export const fetchDataFromWP = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/marinekeys`, {next: {revalidate: 3600}});
      const data = await res.json();
      if(!data) {
        return [];
      }
      return data;
  };
  export const fetchServiceFromWP = async (slug:string, locale:string) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services-${locale}?slug=${slug}`,{next: {tags: ['services'], revalidate: 1800}});
      const data = await res.json();
      if(!data) {
        return [];
      }
      return data;
  };
  
  export const fetchServicesLocaleFromWP = cache(

    async (locale:string) => {
      const res = await fetch(`/api/proxy?locale=${locale}`,{ next: { tags: ['services']} } );
      const data = await res.json();
      if(!data) {
        return [];
      }
      return data;
    }
  ) 


  export const services = [
    {
      title: "Yacht Delivery",
      imageUrl: "/hero-2.webp",
      description:
        "Experienced yacht crew for on-board management and assistance.",
        number: 1
    },
    {
      title: "Yacht Maintenance",
      imageUrl: "/maintenance.webp",
      description:
        "Professional yacht maintenance services to keep your vessel in top condition.",
        number: 2
    },
    {
      title: "Yacht Incharge ",
      imageUrl: "/workers.PNG",
      description: "Safe and timely yacht delivery to your desired location.",
      number: 3
    },
      {
        title: "Yacht Trainning",
        imageUrl: "/yacht-management.jpg",
        description:
          "Comprehensive yacht training to enhance your skills on the water.",
          number: 4,
      },
      {
        title: "Yacht Survey",
        imageUrl: "/survey.webp",
        description:
          "Detailed yacht surveys to assess the condition of your vessel.",
          number: 5
      },
      {
        title: "SoS Yachting",
        imageUrl: "/hero-1.webp",
        description: "Emergency support services for yachts in distress.",
        number: 6
      },
      {
        title: "Sales & Renting",
        imageUrl: "/boat.webp",
        description: "Yacht sales and rental services tailored to your needs.",
        number: 7
      },
      {
        title: "Yacht cleaning",
        imageUrl: "/cleanning.webp",
        description: "Yacht sales and rental services tailored to your needs.",
        number: 8
      },
    ];