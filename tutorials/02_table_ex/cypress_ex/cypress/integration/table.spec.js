/// <reference types="Cypress" />

describe('Table Test', function() {
  it('Check table element', function() {
    cy.visit('http://localhost:8081')

    const TEAM_IDX = 0
    const POINTS_IDX = 2
    const LENGTH = 3

    const table = {}

    let ix = 0
    let team = ""
    cy.get('tbody td').each(($td) => {
      cy.log($td.text())
      if (ix % LENGTH == TEAM_IDX) {
        team = $td.text()
      }

      if (ix % LENGTH == POINTS_IDX) {
        if (team in table) {
          table[team] += Number($td.text())
        } else {
          table[team] = Number($td.text())
        }
      }

      ix += 1
    })

  cy.log(table)
  })  
})
