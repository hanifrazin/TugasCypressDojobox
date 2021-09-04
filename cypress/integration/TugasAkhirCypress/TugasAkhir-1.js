describe('Testing Admin PKH', () => {
    it('TC-001 Login', () => {
        cy.visit('');
        cy.get('#input-email').type('e@dojobox.id',{force:true}).should('have.value','e@dojobox.id');
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin');
        cy.get('#btn-login').contains('Login').click({force:true});
        cy.get('.img-profile').should('be.visible');
        cy.get('.mr-2 > b').should('be.visible').contains('Super Admin');
        cy.get('[href="facilitator/edit/6"]').contains('Ubah').click({force:true});
        cy.wait(5000);
        // cy.get('[href="facilitator/detail/6"]').click({force:true})
    });
})