/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Visual Regression Testing', () => {
  beforeEach(() => {
    cy.visit('https://picsum.photos').then(() => {
      cy.url().should('contain', 'https://picsum.photos')
    })
  })

  it('look for image difference', () => {
    cy.title().should('eq', 'Lorem Picsum')
    cy.percySnapshot('lorem_picsum');
  })

})