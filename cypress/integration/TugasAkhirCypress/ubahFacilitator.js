const user_province_id = '33';
const user_province = 'JAWA TENGAH';
const user_area_city_id = '3319';
const user_area_city = 'KAB. KUDUS';
const user_area_subdistrict_id = '331902';
const user_area_subdistrict = 'Kota Kudus';

const province = 'BANTEN';
const provinceId = '36';
const city = 'KOTA TANGERANG SELATAN';
const cityId = '3674';
const subdistrict = 'Pamulang';
const subistrcitId = '367406';

describe('Cek Fungsionalitas Ubah Facilitator', () => {
    before(()=> {
        cy.loginAdminPkh();
    })
    
    it('TC-001 Ubah Data yang dipilih', () => {
        cy.get('#dataTable_filter > label > .form-control').type('Dojo-1631064940795').should('have.value','Dojo-1631064940795');
        cy.buttonEllipsis('Ubah',1);

        cy.get('.d-flex > .bg-white > .container-fluid > .text-gray-800')
            .and('have.class','font-weight-bold')
            .contains('Ubah Data Fasilitator')
            .click();
        cy.wait(3000);
        cy.get('.col-md-4 > .card > .card-body').scrollIntoView({easing:'linear',duration:1000}).click({force:true});
        cy.get('#user_fullname').invoke('val').should('not.be.empty').should('equal','Dojo-1631064940795');
        cy.get('#user_email').invoke('val').should('not.be.empty').should('equal','dojo.1631064940795@dojobox.id');
        cy.get('#myfile').attachFile('pikachu.jpg');
        cy.get('#img-prev[alt="pikachu.jpg"]');
        cy.get('#user_is_active').invoke('val').should('equal','1');
        cy.wait(3000);
        cy.get('#user_password').type('P@ssw0rd',{force:true}).should('have.value','P@ssw0rd');
        cy.wait(3000);
        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').click();
        cy.wait(5000);
        // cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide')
        //   .and('have.class','fa-eye-slash').should('have.class','fa-eye-slash').click();
        // cy.wait(5000);

        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').and('have.class','fa-eye-slash').click();
        cy.get('#user_province_id').invoke('val').should('equal',provinceId);
        cy.get('#user_city_id').invoke('val').should('equal',cityId);
        cy.get('#user_subdistrict_id').invoke('val').should('equal',subistrcitId);
        cy.get('textarea').invoke('val').should('equal','Jl. Reni Jaya No 10');

        cy.get('.alamat-penugasan > h5.text-dark').scrollIntoView({easing:'linear',duration:1000}).click({force:true});
        // cy.get('#user_area_is_domicile').check({force:true}).should('be.checked');
        cy.get('select#user_area_province_id').should('not.be.disabled').select(user_province).should('have.value',user_province_id);
        cy.get('select#user_area_city_id').should('not.be.disabled').select(user_area_city).should('have.value',user_area_city_id);
        cy.get('select#user_area_subdistrict_id').should('not.be.disabled').select(user_area_subdistrict).should('have.value',user_area_subdistrict_id);

        cy.get('#edit').click();
        cy.wait(1000)
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header').contains('Success');
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click();
    });

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})