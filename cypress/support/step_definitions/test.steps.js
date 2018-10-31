/* global Given, When, Then */

beforeEach(function() {
  cy.visit('');
  cy.fixture('example').as('example');
});

Given('I open the homepage', () => {
  cy.title().should('include', 'AngularMaterial');
  cy.get('.primary-header h1').should('contain', 'Home');
});

When('I click on the sidenav toggle button', () => {
  cy.get('mat-sidenav').should('not.be.visible');
  cy.get('#nav-toggle').click();
});

Then('the sidenav should appear', () => {
  cy.get('mat-sidenav').should('be.visible');
  cy.fixture('example').as('example');
  cy.get('@example')
    .then(example => { // able to read adminData
      cy
        .get('input[name="name"]')
        .type(example.name)
        .should("have.value", example.name)
        .get('input[name="email"]')
        .type(example.email)
        .should("have.value", example.email)
        .get('textarea[name="body"]')
        .type(example.body)
        .should("have.value", example.body);

      cy.get("#demoForm").submit();

      cy.get('#form-submission-name').should("contain", example.name);
      cy.get('#form-submission-email').should("contain", example.email);
      cy.get('#form-submission-body').should("contain", example.body);
    })

});

