/// <reference types="Cypress" />

describe('My First Test', function() {
  it('Does not do much pass!', function() {
    expect(true).to.equal(true)
  })

  it('Does not do much fail!', function() {
    expect(true).to.equal(false)
  })

  it('finds the content "type"', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })  
})
