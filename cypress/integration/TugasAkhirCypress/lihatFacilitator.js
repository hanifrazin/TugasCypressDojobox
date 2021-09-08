const btnRow = 'tbody > :nth-child(1) > .dt-center > .btn-group';

describe('Cek Fungsionalitas Lihat Facilitator',() => {
    before(() => {
        cy.loginAdminPkh();
    });
    
    it('TC-001 Cari Data yang sudah di tambahkan', () => {
        cy.get('#dataTable_filter > label > .form-control').type('Dojo').should('have.value','Dojo');
        cy.scrollTo('topRight',{duration:1000});
        cy.get(`${btnRow} > .btn`).click();
        cy.wait(3000);
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
          .contains('Lihat')
          .click({force:true});
        cy.scrollTo('bottomRight',{duration:1000})
    });

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
});