/// <reference types="Cypress" />

describe('Table Test', function() {
  it('Check table element', function() {
    cy.visit('http://localhost:8081')

    const TDA_TEAM_IDX = 0
    const TDA_POINTS_IDX = 1
    const TDA_LENGTH = 2

    const table = {}

    let team = ""
    for (let ix = 0; ix < 3; ix++) {
      cy.get('tbody td a').eq(ix*TDA_LENGTH+TDA_TEAM_IDX).then(($teamCell) => {
        cy.log($teamCell.attr('alt'))
        team = $teamCell.attr('alt')
      })

      cy.get('tbody td a').eq(ix*TDA_LENGTH+TDA_POINTS_IDX).then(($pointsCell) => {
        let points = Number($pointsCell.text())
        cy.log(points)
        
        if (team in table) {
          table[team] += points
        } else {
          table[team] = points
        }
      })
    }

    cy.log(table)
  })  
})
