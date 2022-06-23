import attendreSecondes from "../navigation/attendreSecondes";

/**
 * Appuyer sur une touche du clavier
 * @param  {String} touche La touche a taper
 */
export default async (touche) => {
        await browser.keys(touche);
        await attendreSecondes(2);

};
