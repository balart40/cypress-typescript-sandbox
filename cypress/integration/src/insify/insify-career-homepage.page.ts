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
}
