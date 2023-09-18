const selectors = {
    testimonials: 'swiper-wrapper',
    carousel: '.slick-list',
    track: '.slick-track',
    //span class="swiper-pagination-bullet"
    nextButton: '.slick-next',
    previousButton: '.slick-prev',
    activeSlide: '.slick-active'
};

export const verifyCarouselPresence = () => {
    // Cypress commands for verifications
    cy.log('Verify that carousel is present.');
    cy.get(selectors.testimonials).as('testimonials');
    cy.get('@testimonials').find(selectors.carousel).as('carousel');
    cy.get('@testimonials').find(selectors.track).as('track');
    cy.get('@testimonials').find(selectors.nextButton).as('nextButton');
    cy.get('@testimonials').find(selectors.previousButton).as('previousButton');
};

export const clickOnNextButton = () => {
    cy.log('Click on the next button in the carousel.');
};

export const clickOnPreviousButton = () => {
    cy.log('Click on the previous button in the carousel.');
};

export const verifyVideoPresence = () => {
    cy.get('[data-cy="homepage-hero-video"]')
}