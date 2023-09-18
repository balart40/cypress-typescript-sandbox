import {
    clickOnNextButton,
    clickOnPreviousButton,
    verifyCarouselPresence,
    verifyVideoPresence
} from '../../integration/src/steps/cypress-io-home-page-steps';
import {
    dismissCookiePolicy,
    verifyCookiePolicyPresence
} from '../../integration/src/steps/cypress-io-cookiePolicy';
import { beforeEach } from 'mocha';


describe('Homepage', () => {

    beforeEach(() => {
        cy.visit('https://cypress.io');
    });

    it('Should show dismissible cooke policy banner', () => {
        verifyCookiePolicyPresence();
        dismissCookiePolicy();
    });


    it('Should include an introduction video', () => {
        verifyVideoPresence();
    });
    /**
    it('Should include a list of top features', () => {

    });
     **/
    it('Should have controllable carousels', () => {
        verifyCarouselPresence();
        clickOnNextButton();
        clickOnPreviousButton();
    });

});