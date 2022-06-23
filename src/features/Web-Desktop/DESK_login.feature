@PART @WEBDESKTOP
Feature: DESK_login

    Scenario: DESK_login

        #Connexion au compte
        When Je clique sur "login"
        Given Je verifie que je suis sur la page "https://the-internet.herokuapp.com/login"
        Given Je m'authentifie avec le compte "tomsmith" ayant le mot de passe "SuperSecretPassword!"
        Then Je verifie la presence du texte "You logged into a secure area!"

                
                