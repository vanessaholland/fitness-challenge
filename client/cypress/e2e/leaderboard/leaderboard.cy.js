describe('Loads the leaderboard', () => {
    it('Loads athletes by rank', () => {
        cy.seedAndVisit()

        cy.get('[data-cy=leader-table-body] > tr')
            .should('have.length', 2)

        cy.get('[data-cy=leader-table-body] > tr:nth-child(1) > td:nth-child(2)')
            .should('have.text', 'VanessaH.')
    })

})
