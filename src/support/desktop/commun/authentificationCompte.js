import accederPage from '../../commun/navigation/accederPage'
import saisirTexte from '../../commun/action/saisirTexte';
import cliquerSur from '../../commun/action/cliquerSur';
import verifierUrlPage from '../../commun/verification/verifierUrlPage'
import attendreSecondes from '../../commun/navigation/attendreSecondes';
/**
 * Authentification a un compte PART
 * @param  {String} adresseMail - adresse mail du compte client
 * @param  {String} motDePasse - mot de passe du compte client
 */
export default async (adresseMail, motDePasse) => {

    await attendreSecondes(5)
    
    //Saisie de l'adresse mail
    await saisirTexte(adresseMail, "username")

    //Saisie du mot de passe
    await saisirTexte(motDePasse, "password")

    //Clic sur le CTA "Se connecter"
    await cliquerSur("boutton submit")

    await attendreSecondes(3)

    //Clic sur J'accepte si bandeau visible
    //await cliquerSurSiBesoin("Accepter Cookies - Structure Page")
    
}