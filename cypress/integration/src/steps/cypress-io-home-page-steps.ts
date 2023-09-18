const selectors = {
    testimonials: 'div[data-cy="tweet-carousel"]',
    //todo
    //nextButton: '.slick-next',
    //previousButton: '.slick-prev',
};

export const verifyCarouselPresence = () => {
    // Cypress commands for verifications
    cy.log('Verify that carousel is present.');
    cy.get(selectors.testimonials).as('testimonials');
};
//todo
/**
export const clickOnNextButton = () => {
    cy.log('Click on the next button in the carousel.');
};

export const clickOnPreviousButton = () => {
    cy.log('Click on the previous button in the carousel.');
};
**/
export const verifyVideoPresence = () => {
    cy.get('[data-cy="homepage-hero-video"]')
}

export const verifyTopFeatures = () => {
    cy.get('body > main > section:nth-child(2) > div')
}
