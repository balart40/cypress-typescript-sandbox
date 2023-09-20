"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dismissCookiePolicy = exports.verifyCookiePolicyPresence = void 0;
var selectors = {
    // div class=" osano-cm-dialog__content osano-cm-content "
    cookiePolicyBanner: 'div[class=" osano-cm-dialog__content osano-cm-content "]',
    //<button class=" osano-cm-dialog__close osano-cm-close ">
    cookiePolicyBannerButton: 'button[class=" osano-cm-dialog__close osano-cm-close "]'
};
var verifyCookiePolicyPresence = function () {
    cy.get(selectors.cookiePolicyBanner).as('cookiePolicyBanner');
};
exports.verifyCookiePolicyPresence = verifyCookiePolicyPresence;
var dismissCookiePolicy = function () {
    cy.get(selectors.cookiePolicyBannerButton).click();
    cy.get('@cookiePolicyBanner').should('not.be.visible');
};
exports.dismissCookiePolicy = dismissCookiePolicy;
