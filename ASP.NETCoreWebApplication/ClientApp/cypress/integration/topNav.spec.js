/// <reference types="Cypress" />

context('Top nav', () => {
    ['Counter', 'Weather forecast'].forEach(item => {
        it('can navigate to ' + item, () => {
            cy.get('.navbar-nav').contains('a', item).click()
            cy.contains('h1', item)
        })
    })
})
