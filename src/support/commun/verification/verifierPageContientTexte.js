import attendreSecondes from '../navigation/attendreSecondes';
/**
 * verifier que la page contient le texte attendu
 * @param  {String} texte - texte a verifier
 */
export default async (texte) => {

        const element = await $('body')

        await expect(element).toHaveTextContaining(texte)

        await attendreSecondes(3)
    

};
