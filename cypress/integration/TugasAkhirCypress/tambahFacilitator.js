const province = 'BANTEN';
const provinceId = '36';
const city = 'KOTA TANGERANG SELATAN';
const cityId = '3674';
const subdistrict = 'Pamulang';
const subistrcitId = '367406'

describe('Cek Fungsionalitas Tambah Facilitator', () => {
    it('TC-001 Tambah Facilitator dengan data valid', () => {
        cy.loginAdminPkh();
        cy.get('.d-flex > .btn').and('have.class','add-facilitator').contains('Tambah Facilitator').click();
        cy.wait(3000);
        cy.get('.col-md-4 > .card > .card-body').scrollIntoView({easing:'linear',duration:1000}).click({force:true});
        cy.get('#user_fullname').type('Dojo Patrobas',{force:true}).should('have.value','Dojo Patrobas');
        cy.get('#user_email').type('dojo.patrobas@dojobox.id',{force:true}).should('have.value','dojo.patrobas@dojobox.id');
        cy.get('#myfile').attachFile('pikachu.jpg');
        cy.get('#img-prev[alt="pikachu.jpg"]');
        cy.get('#user_is_active').select('Aktif').should('have.value','1');
        cy.wait(1000);
        cy.get('#user_password').type('P@ssw0rd',{force:true}).should('have.value','P@ssw0rd');
        cy.wait(1000);
        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').click();
        cy.wait(5000);
        // cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide')
        //   .and('have.class','fa-eye-slash').should('have.class','fa-eye-slash').click();
        // cy.wait(5000);

        // cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').and('have.class','fa-eye-slash').click();
        cy.get('#user_province_id').select(province).should('have.value',provinceId);
        cy.get('#user_city_id').select(city).should('have.value',cityId);
        cy.get('#user_subdistrict_id').select(subdistrict).should('have.value',subistrcitId);
        cy.get('textarea').type('Jl. Reni Jaya No 10').should('have.value','Jl. Reni Jaya No 10');

        cy.get('.alamat-penugasan > h5.text-dark').scrollIntoView({easing:'linear',duration:1000}).click({force:true});
        cy.get('#user_area_is_domicile').check({force:true}).should('be.checked');
        cy.get('select#user_area_province_id').should('be.disabled').contains(province).should('have.value',provinceId);
        cy.get('select#user_area_city_id').should('be.disabled').contains(city).should('have.value',cityId);
        cy.get('select#user_area_subdistrict_id').should('be.disabled').contains(subdistrict).should('have.value',subistrcitId);

        cy.get('#add').click();
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header').contains('Success');
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').contains('OK').click({force:true});
        
    });
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})