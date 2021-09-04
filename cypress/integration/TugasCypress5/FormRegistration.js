describe('Automation Registration', () => {
    it('Testing Student Registration Form', () => {
        cy.openDemoQA();
        cy.contains('Practice Form');
        cy.get('#firstName').focus().type('Dojo',{force:true}).should('have.value','Dojo');
        cy.get('#lastName').focus().type('Piero',{force:true}).should('have.value','Piero');
        cy.get('#userEmail').focus().type('dojo.piero@dojo.id',{force:true}).should('have.value','dojo.piero@dojo.id');
        cy.get('input#gender-radio-1').should('not.be.checked');
        cy.get('input#gender-radio-2').check({force:true}).should('be.checked');
        cy.get('input#gender-radio-3').should('not.be.checked');
        cy.get('#userNumber').focus()
                             .type('0898327524')
                             .should('have.value','0898327524')
                             .invoke('val')
                             .should('have.length',10);
        cy.get('#dateOfBirthInput').invoke('val','20 Jul 1998').should('have.value','20 Jul 1998');
        cy.get('#subjectsInput').focus().type('Computer Science{enter}');
        cy.get('#hobbiesWrapper > .col-md-3 > #subjects-label').contains('Hobbies').scrollIntoView({easing:'linear',duration:1000})
        cy.get('input#hobbies-checkbox-1').check({force:true}).should('be.checked');
        cy.get('input#hobbies-checkbox-2').check({force:true}).should('be.checked');
        cy.get('input#hobbies-checkbox-3').check({force:true}).should('be.checked');
        cy.get('#uploadPicture').attachFile('pikachu.jpg');
        cy.get('#currentAddress').focus().type('Jl Tanah Baru Raya 51 RT 004/07, Dki Jakarta').should('have.value','Jl Tanah Baru Raya 51 RT 004/07, Dki Jakarta');
        cy.get('#react-select-4-input').should('be.disabled');
        cy.get('#react-select-3-input').focus().type('Haryana{enter}');
        cy.get('#react-select-4-input').focus().type('Panipat{enter}');
        cy.get('#submit').contains('Submit').click({force:true});
        cy.wait(3000);
        cy.get('.modal-header').contains('Thanks for submitting the form').should('be.visible');
        cy.get('.modal-content > .modal-footer > #closeLargeModal').scrollIntoView({easing:'linear',duration:1000}).click({force:true});

    });
})