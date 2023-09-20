import { InsifyCareer } from '../../../integration/src/insify/insify-career-homepage.page';

const insifyCareer = new InsifyCareer();

describe('Insify Careers Home Page', () => {
    beforeEach(() => {
        cy.visit('https://careers.insify.nl/');
    });

    it('Verify logo', () => {
        insifyCareer.verifyInsifyLogo();
    });

    it('Decline cookies', () => {
        insifyCareer.verifyCookieBanner();
        insifyCareer.declineCookies();
    });

    it('Search for job in amsterdan', () => {
        insifyCareer.declineCookies();
        insifyCareer.searchJobOpeningsSection();
        insifyCareer.selectAmsterdan();
        insifyCareer.writeOnSearchJob('SDET');
        insifyCareer.acceptOblivion();
    });
});