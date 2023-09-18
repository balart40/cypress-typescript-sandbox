import { clickOnNextButton,
    clickOnPreviousButton,
    verifyCarouselPresence
} from '../../integration/src/steps/cypress-io-home-page-steps';
import {
    dismissCookiePolicy,
    verifyCookiePolicyPresence
} from '../../integration/src/steps/cypress-io-cookiePolicy';

describe('Homepage', () => {

    before(() => {
        cy.visit('https://cypress.io');
    });

    it('Should show dismissible cooke policy banner', () => {
        verifyCookiePolicyPresence();
        dismissCookiePolicy();
    });

    /**
    it('Should include an introduction video', () => {

    });

    it('Should include a list of top features', () => {

    });

    it('Should have controllable carousels', () => {
        verifyCarouselPresence();
        clickOnNextButton();
        clickOnPreviousButton();
    });
     **/
});