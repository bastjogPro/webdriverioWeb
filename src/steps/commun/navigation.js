import { Given,When,Then } from '@cucumber/cucumber';

import accederPage from '../../support/commun/navigation/accederPage';
import attendreSecondes from '../../support/commun/navigation/attendreSecondes';

Given(
    /^J'accede a la page "(.*)"$/,
    accederPage
);

Given(
    /^J'attends "(.*)" secondes$/,
    attendreSecondes
);
