import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default async (locateur) => {


    //Recuperation du locateur reel si alias donne

    var locateur2 = getLocateur(locateur)

    await $(locateur2).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    var element = $(locateur2)

    await attendreSecondes(1)

    try {

        await browser.execute("document.querySelector('" + locateur2 + "').click()")
    }
    catch {
        try {
            await attendreSecondes(1)
            await element.click()
        }
        catch {
            try {
                await attendreSecondes(1)
                await element.click()
            }
            catch (error) {
                throw new Error("ERREUR - Le clic sur " + locateur + " n'a pas pu etre effectue")
            }
        }
    }



};