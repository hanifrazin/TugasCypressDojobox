describe('Cek Fungsionalitas Lihat Facilitator',() => {
    before(() => {
        cy.loginAdminPkh();
    });
    
    it('TC-001 Cari Data yang sudah di tambahkan', () => {
        cy.get('#dataTable_filter > label > .form-control').type('Dojo-1631064940795').should('have.value','Dojo-1631064940795');
        cy.buttonEllipsis('Lihat',1);
        cy.scrollTo('bottomRight',{duration:1000})
        // cy.scrollTo('topRight',{duration:1000});
        // cy.get(`${btnRow} > .btn`).click();
        // cy.wait(3000);
        // cy.get(`${btnRow}`)
        //   .should('have.class','w-100')
        //   .and('have.class','show')
        //   .and('be.visible');
        // cy.get(`${btnRow} > .dropdown-menu`)
        //   .should('have.class','show')
        //   .and('be.visible');
        // cy.get(`${btnRow} > .dropdown-menu > .dropdown-item`)
        //   .should('have.length',3)
        //   .and('be.visible')
        //   .contains('Lihat')
        //   .click({force:true});
    });

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
});