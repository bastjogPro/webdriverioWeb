@PART @WEBDESKTOP
Feature: DESK_checkboxes

    Scenario: DESK_checkboxes

        When Je clique sur "checkboxes"
        Given Je verifie que je suis sur la page "https://the-internet.herokuapp.com/checkboxes"
        Given Je clique sur "[type='checkbox']:nth-child(1)"
        Then Je verifie que "[type='checkbox']:nth-child(1)" est coche

                
                