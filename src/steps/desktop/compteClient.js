import { Given,When,Then } from '@cucumber/cucumber';

import authentificationCompte from '../../support/desktop/commun/authentificationCompte.js';

When(
    /^Je m'authentifie avec le compte "(.*)" ayant le mot de passe "(.*)"$/,
    authentificationCompte
);
