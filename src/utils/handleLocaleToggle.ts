
export default function handleLocaleToggle(pathname: string) {
  if (pathname.startsWith("/en")) {
    let newPath = "services";
    const service = pathname.split("/").pop();
    if (service) {
      const translatedService = handleServiceTranslate(service, 'fr');
      newPath = newPath + "/"+ translatedService;
    }
    return `${newPath}`
 
  } else {
    let newPath = "services";
    const service = pathname.split("/").pop();
    if (service) {
        const translatedService = handleServiceTranslate(service, 'en');
        newPath = newPath + "/"+ translatedService;
      }
    return `${newPath}`
  }
   
}

export  function handleServiceTranslate(service: string, locale: string){
    if(locale === "fr") {
        if(service === "yacht-management") {
            return "gestion-de-yacht";
            }
            if(service === "yacht-training") {
            return "formation-yachting";
            }
            if(service === "yacht-maintenance") {
            return "entretien-de-yacht";
            }
            if(service === "yacht-delivery") {
            return "livraison-de-yachts";
            }
          
            if(service === "yacht-inspection") {
            return "inspection-de-yacht";
            }
            if(service === "sos-yachting") {
            return "sos-yachting";
            }
            if(service === "yacht-sales-and-rentals") {
            return "vente-et-location-de-yacht";
            }
            if(service === "yacht-cleaning") {
            return "nettoyage-de-yacht";
            }
    }
    if (locale === 'en'){
        if(service === "gestion-de-yacht") {
        return "yacht-management";
        }
        if(service === "formation-yachting") {
        return "yacht-training";
        }
        if(service === "entretien-de-yacht") {
        return "yacht-maintenance";
        }
        if(service === "livraison-de-yachts") {
        return "yacht-delivery";
        }
     
        if(service === "inspection-de-yacht") {
        return "yacht-inspection";
        }
        if(service === "sos-yachting") {
        return "sos-yachting";
        }
        if(service === "vente-et-location-de-yacht") {
        return "yacht-sales-and-rentals";
        }
        if(service === "nettoyage-de-yacht") {
        return "yacht-cleaning";
        }
    }
}