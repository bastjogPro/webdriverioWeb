import getUrl from '../../mapping/fonctions/url'
import attendreSecondes from "./attendreSecondes";

/**
 * Acceder a une URL
 * @param  {String} urlAVisiter - URL a visiter
 */
export default async (urlAVisiter) => {

    //Recuperation du locateur reel si alias donne
    if (!urlAVisiter.startsWith("/")) {
        urlAVisiter = getUrl(urlAVisiter)
    }
    if (urlAVisiter == "baseUrl") {
        urlAVisiter = config.baseUrl
    }
    
    // Acces a la page
   try{
        await browser.url(urlAVisiter);
   }
   catch{
       await attendreSecondes(2)
       try{
        await browser.url(urlAVisiter);
   }
   catch(e){
       throw new Error("Impossible d'acceder a la page "+urlAVisiter+" ("+e+")")

   }

   }
}