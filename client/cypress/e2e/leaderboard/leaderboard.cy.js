describe('Viewing the leaderboard', () => {
    it('Navigates to the leaderboard and displays athletes by rank', () => {
        cy.visit('http://localhost:8080/')

        cy.get('[data-cy=navbar')
            .should('be.visible')

        cy.get('[data-cy=navbar] > div > ul > li')
            .should('have.length', 3)

        cy.seedLeaders()
        cy.get('[data-cy=leaderboard-link]').click()

        cy.get('[data-cy=leader-table]')
            .should('be.visible')

        cy.get('[data-cy=leader-table-body] > tr')
            .should('have.length', 2)

        cy.get('[data-cy=leader-table-body] > tr:nth-child(1) > td:nth-child(2)')
            .should('have.text', 'VanessaH.')
    });
});
