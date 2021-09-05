const btnRow = 'tbody > :nth-child(1) > .dt-center > .btn-group';

describe('Testing Admin PKH', () => {
    it('TC-001 Login', () => {
        cy.visit('');
        cy.get('#input-email').type('e@dojobox.id',{force:true}).should('have.value','e@dojobox.id');
        cy.get('#input-password').type('admin',{force:true}).should('have.value','admin');
        cy.get('#btn-login').contains('Login').click({force:true});
        cy.get('.img-profile').should('be.visible');
        cy.get('.mr-2 > b').should('be.visible').contains('Super Admin');
        cy.scrollTo('topRight',{duration:1000});
        cy.get(`${btnRow} > .btn`).click();
        cy.get(`${btnRow}`)
          .should('have.class','w-100')
          .and('have.class','show')
          .and('be.visible');
        cy.get(`${btnRow} > .dropdown-menu`)
          .should('have.class','show')
          .and('be.visible');
        cy.get(`${btnRow} > .dropdown-menu > .dropdown-item`)
          .should('have.length',3)
          .and('be.visible')
          .contains('Ubah')
          .click({force:true});

        // cy.get(':nth-child(1) > .dt-center > .btn-group > .btn > .fas').click({force:true})
        // cy.get('[href="facilitator/edit/6"]').contains('Ubah').click({force:true});

        // cy.get('[href="facilitator/detail/6"]').click({force:true})
    });
})