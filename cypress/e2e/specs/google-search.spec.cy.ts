import { GoogleSearch } from '../../integration/src/page-objects/google-search.page';

const search = new GoogleSearch();

describe('Google Navigation', () => {
    it('Google Search', () => {
        cy.visit('https://www.google.com')
        search.googleSearch().type("Something");
        search.googleSearchBtn().click();
        search.searchResults().should('exist');
    });
});