const selectors = {
    cookiePolicyBanner: '#homerun-cookie-banner',
};

export class InsifyCareer {

    verifyInsifyLogo() {
        return cy.get('img[alt="Insify"]').should('exist');
    }

    verifyCookieBanner() {
        return cy.get(selectors.cookiePolicyBanner)
    }

    declineCookies() {
        cy.get('button[data-testid="button-decline"]').click()
        return cy.get(selectors.cookiePolicyBanner).should('not.be.visible')
    }

    selectAmsterdan() {
        //cy.get('[aria-label=Location]').select('Amsterdan')
        //cy.get('.multiselect__input[placeholder="Location"]').click()
        cy.get('.multiselect__tags').contains('Location').click();
        //cy.get('.option-class-for-location').contains('New York').click();
        cy.get('.multiselect__option').contains('Amsterdam').should('be.visible').click();
    }

    searchJobOpeningsSection() {
        cy.get('#vacancies').scrollIntoView().should('be.visible')
    }

    writeOnSearchJob(jobTitle: string) {
        cy.get('input[data-testid="search"]').type(jobTitle)
    }

    acceptOblivion() {
        cy.contains('h2', 'No jobs found for "SDET"').should('be.visible');

    }
}
