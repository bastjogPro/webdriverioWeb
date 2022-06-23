import { Given,When,Then } from '@cucumber/cucumber';

import saisirTexte from '../../support/commun/action/saisirTexte';
import cliquerSur from '../../support/commun/action/cliquerSur';
import taperTouche from '../../support/commun/action/taperTouche';


When(
    /^Je saisis "(.*)" dans le champ "(.*)"$/,
    saisirTexte
);


When(
    /^Je clique sur "(.*)"$/,
    cliquerSur
);

When(
    /^Je tape sur la touche du clavier "([^"]*)?"$/,
    taperTouche
);

