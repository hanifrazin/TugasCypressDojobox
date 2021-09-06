describe('Cek Fungsionalitas Tambah Facilitator', () => {
    it('TC-001 Tambah Facilitator dengan data valid', () => {
        cy.loginAdminPkh();
        cy.get('.d-flex > .btn').and('have.class','add-facilitator').contains('Tambah Facilitator').click();
        cy.wait(1000);
        cy.get('#user_fullname').type('Dojo Piero',{force:true}).should('have.value','Dojo Piero');
        cy.get('#user_email').type('dojo.piero@dojobox.id',{force:true}).should('have.value','dojo.piero@dojobox.id');
        cy.get('#user_is_active').select('Aktif').should('have.value','1');
        cy.get('#user_password').type('P@ssw0rd',{force:true}).should('have.value','P@ssw0rd');
        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').click();
        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').and('have.class','fa-eye-slash')
                                                                                   .should('have.class','fa-eye-slash')
                                                                                   .click();
        // cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').and('have.class','fa-eye-slash').click();
        cy.get('#user_province_id').select('BANTEN').should('have.value','36');
        cy.get('#user_city_id').select('KOTA TANGERANG SELATAN').should('have.value','3674');
        cy.get('#user_subdistrict_id').select('Pamulang').should('have.value','367406');
        cy.get('textarea').type('Jl. Reni Jaya No 10').should('have.value','Jl. Reni Jaya No 10');
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})