/// <reference types="Cypress" />

describe('ATP by country', function() {
  it('ATP by country', function() {
    cy.visit('https://www.atptour.com/en/rankings/singles')

    cy.get('tbody tr')
      .each((el$) => {
        cy.log(el$.text())
      })
    //cy.log(cy.get('tbody>tr').eq(1).text())
  })  
})
