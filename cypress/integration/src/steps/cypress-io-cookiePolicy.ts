const selectors = {
    // div class=" osano-cm-dialog__content osano-cm-content "
    cookiePolicyBanner: 'div[class=" osano-cm-dialog__content osano-cm-content "]',
    //<button class=" osano-cm-dialog__close osano-cm-close ">
    cookiePolicyBannerButton: 'button[class=" osano-cm-dialog__close osano-cm-close "]'
};

export const verifyCookiePolicyPresence = () => {
    cy.get(selectors.cookiePolicyBanner).as('cookiePolicyBanner');
};

export const dismissCookiePolicy = () => {
    cy.get(selectors.cookiePolicyBannerButton).click();
    cy.get('@cookiePolicyBanner').should('not.be.visible');
};