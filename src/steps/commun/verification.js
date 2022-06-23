import { Given, When, Then } from '@cucumber/cucumber';

import verifierUrlPage from '../../support/commun/verification/verifierUrlPage';
import verifierElementPresent from '../../support/commun/verification/verifierElementPresent';
import verifierPageContientTexte from '../../support/commun/verification/verifierPageContientTexte';
import verifierElementCoche from '../../support/commun/verification/verifierElementCoche';

When(
    /^Je verifie que je suis sur la page "(.*)"$/,
    verifierUrlPage
);

When(
    /^Je verifie que l\'element "(.*)" est present$/,
    verifierElementPresent
);

When(
    /^Je verifie la presence du texte "(.*)"$/,
    verifierPageContientTexte
);

When(
    /^Je verifie que "(.*)" est coche$/,
    verifierElementCoche
);