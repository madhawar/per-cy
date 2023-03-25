/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('sampath bank ex', () => {
  beforeEach(() => {
    cy.visit('https://picsum.photos').then(() => {
      // cy.url().should('eq', 'https://www.sampath.lk/en/exchange-rates')
    })
  })

  // it('displays two todo items by default', () => {
  //   cy.xpath('//td[contains(text(), "U.K. Pound")]/following-sibling::td[1]').invoke('text').as('tt_buying')
  //   cy.get('@tt_buying').then((tt_buying) => {
  //     cy.get('p').contains('Daily Exchange rates as at').invoke('text').then((message) => {
  //       cy.log(`${message} T/T Buying U.K. Pound ${tt_buying}`)
  //     })
  //   })

    cy.percySnapshot('Sampath Bank');
  })

})
