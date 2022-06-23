@PART @WEBDESKTOP
Feature: DESK_parcoursHardis

    Scenario: DESK_parcoursHardis

        When Je clique sur "Nous rejoindre"
        Given Je verifie que je suis sur la page "https://www.hardis-group.com/nous-rejoindre/accueil"
        When Je clique sur "Contact"
        When Je clique sur "Contact"
        Given Je verifie que je suis sur la page "https://www.hardis-group.com/societe/contact"
        When Je rempli le formulaire de contact
        Then Je verifie la presence du texte "La réponse saisie pour le CAPTCHA est incorrecte."


                