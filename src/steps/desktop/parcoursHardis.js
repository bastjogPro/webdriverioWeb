import { Given,When,Then } from '@cucumber/cucumber';

import formulaireContact from '../../support/desktop/commun/formulaireContact.js';

When(
    /^Je rempli le formulaire de contact$/,
    formulaireContact
);
