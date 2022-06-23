import getUrl from '../../mapping/fonctions/url'
import attendreSecondes from '../navigation/attendreSecondes'


/**
 * verifier l'url de la page
 * @param  {String} urlAttendue - URL a verifier
 */
export default async (urlAttendue) => {

    let cookiePaiement = await browser.getCookies(['paiement'])
    if (cookiePaiement.length == 0) {
        var pageOK = false
        var attente = 0
        //Recuperation de l'url reel
        if (!urlAttendue.startsWith('/')) {
            urlAttendue = getUrl(urlAttendue)
        }
        if (urlAttendue == "baseUrl") {
            urlAttendue = config.baseUrl
        }


        // Recuperation de l'url courante
        var urlCourante = await browser.getUrl()

        while (pageOK == false && attente < 3) {
            if (!urlCourante.includes(urlAttendue)) {
                await attendreSecondes(3)
                attente++
            }
            else {
                pageOK = true
            }
        }

        // Recuperation de l'url courante
        urlCourante = await browser.getUrl()
        //urlCourante = urlCourante.replace(/\/\//g, "/")

        urlAttendue = urlAttendue.toString()
        urlCourante = urlCourante.toString()
  

        if (!urlCourante.includes(urlAttendue)) {
            throw new Error("ERREUR - La page actuelle (" + urlCourante + ") ne contient pas l'url attendue (" + urlAttendue + ")")
        }
    }
    

};
