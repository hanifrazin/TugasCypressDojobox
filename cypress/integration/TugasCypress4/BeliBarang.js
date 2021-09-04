describe('Test Module Login', ()=>{
    beforeEach(() => {
        cy.loginDemoBlaze();
    });
    it('TC-002 Pilih HTC One M9', () => {

        // Beli 1 HTC One M9
        cy.scrollTo(0,800,{easing:'linear',duration:1000});
        cy.get(`[onclick="byCat('phone')"]`).contains('Phones').click({force:true});
        cy.wait(1000);
        cy.get(':nth-child(7) > .card > .card-block').contains('HTC One M9').click();
        cy.wait(500);
        cy.get('.name').contains('HTC One M9');
        cy.get('.col-sm-12 > .btn').contains('Add to cart').click({force:true});
        cy.wait(3000);

        // Beli 1 Laptop Dell i7 8gb
        cy.get('.nav-link').contains('Home').click({force:true});
        cy.wait(1000);
        cy.get(`[onclick="byCat('notebook')"]`).contains('Laptops').click({force:true});
        cy.get('#tbodyid').scrollIntoView({easing: 'linear',duration:1000});
        cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').contains('Dell i7 8gb').click();
        cy.get('.col-sm-12 > .btn').contains('Add to cart').click({force:true});
        cy.wait(3000);

        // Beli 1 Apple Monitor 24
        cy.get('.nav-link').contains('Home').click({force:true});
        cy.wait(1000);
        cy.get(`[onclick="byCat('monitor')"]`).contains('Monitors').click({force:true});
        cy.get('#tbodyid').scrollIntoView({easing: 'linear',duration:1000});
        cy.get(':nth-child(1) > .card > .card-block > .card-title').contains('Apple monitor 24').click();
        cy.get('.col-sm-12 > .btn').contains('Add to cart').click({force:true});
        cy.wait(3000);

        // Lihat cart
        cy.get(':nth-child(4) > .nav-link').contains('Cart').click({force:true});
        cy.wait(3000)

        // Bayar
        cy.get('.col-lg-1 > .btn').contains('Place Order').click({force:true});
        cy.get('#orderModal').should('be.visible');
        cy.get('#name').click({force:true}).type('Piero Oreip',{force:true}).should('have.value','Piero Oreip');
        cy.get('#country').click({force:true}).type('Italy',{force:true}).should('have.value','Italy');
        cy.get('#city').click({force:true}).type('Millan',{force:true}).should('have.value','Millan');
        cy.get('#card').click({force:true}).type('378282246310005',{force:true}).should('have.value','378282246310005');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer').scrollIntoView({easing: 'linear',duration:1000});
        cy.get('#month').click({force:true}).type('Agustus',{force:true}).should('have.value','Agustus');
        cy.get('#year').click({force:true}).type('2021',{force:true}).should('have.value','2021');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains('Purchase').click({force:true});
        cy.wait(3000);
        cy.get('.confirm').click();
        cy.wait(2000);
    });
})