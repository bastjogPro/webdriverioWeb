#   Prerequis

#       Node version >=12

Une version stable est disponible https://nodejs.org/dist/latest-v12.x/
Pour installer nodeJS sans droits d'admin : https://theshravan.net/blog/how-to-use-node-and-npm-without-installation-or-admin-rights/

#       Python >=v3

Pour installer Python sans droits d'admin : https://zwbetz.com/install-python-on-windows-without-admin-access/

#   Comment fonctionne le projet

- Les features correspondent aux actions que vous voulez tester, par exemple la connection d'un utilisateur.
- A chaque etape d'une feature est appelle la step qui correspond.
- La step appelle alors la fonction qui lui est lie.
- La fonction est ensuite lancee et si elle se passe sans probleme on peut passer a l'etape suivante de la feature.
- Si tout les points de la feature sont executes sans probleme, alors la feature est valide, sinon l'execution du test s'arrete des la premiere erreur.
- Le fait de fonctionner avec cette architecture la a beaucoup d'avantages (simple a comprendre, fonctions facilement reutilisable et adaptable...)
- Possibilite de generer un rapport a la fin (explique plus bas)


#   Comment lancer les tests

```nodejs
$ npm run wdio:Desktop
``` 

Cette commande permet d'ajouter des parametres utiles, tels que la suite a executer :

```nodejs
$ npx wdio:Desktop --suite complet
```

#   Generation du rapport d'execution

Pour chaque feature executee, un fichier .json est genere automatiquement, contenant toutes les informations utiles telles que le resultat, le temps d'execution, le screenshot de l'erreur,...

Deux commandes sont utilisees concernant le rapport d'execution : 

```nodejs
npm run wdio:genererRapport
```
Permet de generer un rapport HTML a partir des fichiers json crees automatiquement au fil de l'execution

```nodejs
npm run wdio:viderRapports
```
Permet de supprimer les fichiers logs et les rapports precedents
