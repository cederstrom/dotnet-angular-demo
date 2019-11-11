/// <reference types="Cypress" />

context('Counter', () => {
    beforeEach(() => {
      cy.visit('https://localhost:5001/counter')
    })

    it('click', () => {
      cy.contains('button', 'Increment').click()
      cy.contains('Current count: 1')
    })

})
