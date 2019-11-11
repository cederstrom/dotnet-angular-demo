/// <reference types="Cypress" />

context('Weather forcast', () => {
    beforeEach(() => {
      cy.visit('https://localhost:5001/fetch-data')
    })

    it('has a heading', () => {
        cy.contains('h1', 'Weather forecast')
    })
})
