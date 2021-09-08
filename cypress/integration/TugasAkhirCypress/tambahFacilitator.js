const province = 'BANTEN';
const provinceId = '36';
const city = 'KOTA TANGERANG SELATAN';
const cityId = '3674';
const subdistrict = 'Pamulang';
const subistrcitId = '367406';
const userFullName = () => {
  const time = new Date().getTime();
  return `Dojo-${time}`;  
};
const userEmail = () => {
    const time = new Date().getTime();
    return `dojo.${time}@dojobox.id`;
}

describe('Cek Fungsionalitas Tambah Facilitator', () => {
    beforeEach(() => {
        cy.loginAdminPkh();
    });

    it('TC-001 Tambah Facilitator dengan data valid', () => {
        cy.get('.d-flex > .btn').and('have.class','add-facilitator').contains('Tambah Facilitator').click();
        cy.wait(3000);
        cy.get('.col-md-4 > .card > .card-body').scrollIntoView({easing:'linear',duration:1000}).click({force:true});
        cy.get('#user_fullname').type(userFullName(),{force:true}).should('have.value',userFullName());
        cy.get('#user_email').type(userEmail(),{force:true}).should('have.value',userEmail());
        cy.get('#myfile').attachFile('pikachu.jpg');
        cy.get('#img-prev[alt="pikachu.jpg"]');
        cy.get('#user_is_active').select('Aktif').should('have.value','1');
        cy.wait(3000);
        cy.get('#user_password').type('P@ssw0rd',{force:true}).should('have.value','P@ssw0rd');
        cy.wait(3000);
        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').click();
        cy.wait(5000);
        // cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide')
        //   .and('have.class','fa-eye-slash').should('have.class','fa-eye-slash').click();
        // cy.wait(5000);

        cy.get('[style="position: relative;"] > .fa').and('have.class','show-hide').and('have.class','fa-eye-slash').click();
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
        cy.wait(1000)
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header').contains('Success');
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click();
        
    });
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})