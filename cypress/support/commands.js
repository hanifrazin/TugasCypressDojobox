import 'cypress-file-upload';

Cypress.Commands.add('openDemoBlaze', () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.wait(500);
})

Cypress.Commands.add('loginDemoBlaze', () => {
    cy.openDemoBlaze();
    cy.get('#login2').contains('Log in').click({force:true});
    cy.wait(1000);
    cy.get('#loginusername').click().focused().type('dojo-piero',{force:true}).should('have.value','dojo-piero');
    cy.get('#loginpassword').click().focused().type('p@ssw0rd',{force:true}).should('have.value','p@ssw0rd');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains('Log in').click();
    cy.wait(5000);
    cy.get('#nameofuser').contains('Welcome dojo-piero');
})

Cypress.Commands.add('openDemoQA', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
})