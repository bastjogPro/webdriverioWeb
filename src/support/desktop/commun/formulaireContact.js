import saisirTexte from '../../commun/action/saisirTexte';
import cliquerSur from '../../commun/action/cliquerSur';
import attendreSecondes from '../../commun/navigation/attendreSecondes';
import taperTouche from '../../commun/action/taperTouche';
/**
 * Authentification a un compte PART
 * @param  {String} adresseMail - adresse mail du compte client
 * @param  {String} motDePasse - mot de passe du compte client
 */
export default async () => {

    await attendreSecondes(5)
    
    await saisirTexte("Hardis","Societe")
    await saisirTexte("Joguet","Nom")
    await saisirTexte("Bastien","Prenom")
    await saisirTexte("stagiaire","Fonction")
    await saisirTexte("a@a.com","AdresseMail")
    await saisirTexte( "0606060606","Telephone")
    await cliquerSur("Pays")
    await saisirTexte("France","div.chosen-search > input")
    await taperTouche('Enter')
    await cliquerSur("Objet")
    await cliquerSur("option[value='Adelia_Studio']")
    await saisirTexte("92000","Code postal")
    await cliquerSur("Raison")
    await cliquerSur("option[value='article']")
    await saisirTexte("Pas grand chose à dire","Description")
    await cliquerSur("Donnees")
    await cliquerSur("Submit")
    
}