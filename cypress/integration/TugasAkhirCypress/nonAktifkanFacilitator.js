describe('Cek Fungsionalitas Ubah Facilitator', () => {
    before(()=> {
        cy.loginAdminPkh();
    })
    
    it('TC-001 Non Aktifkan Data yang dipilih', () => {
        cy.searchDataPkh('Dojo-1631064940795');
        cy.buttonEllipsis('Nonaktifkan',1);

        cy.wait(1000)
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header').contains('Success');
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click();
    });

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})