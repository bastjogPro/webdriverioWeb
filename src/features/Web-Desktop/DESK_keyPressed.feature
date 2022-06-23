@PART @WEBDESKTOP
Feature: DESK_keyPressed

    Scenario: DESK_keyPressed

        #Connexion au compte
        When Je clique sur "key_presses"
        Given Je verifie que je suis sur la page "https://the-internet.herokuapp.com/key_presses"
        Given Je tape sur la touche du clavier "Space"
        Then Je verifie la presence du texte "You entered: SPACE" 

                
                