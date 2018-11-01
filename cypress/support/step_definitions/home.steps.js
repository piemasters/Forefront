/* global Given, When, Then */

import { getPageHeading } from "../page_objects/headings.po";

beforeEach(function() {
  cy.visit('');
  getPageHeading().contains('Home');
});

Given('I open the {string} homepage', (title) => {
  cy.title().should('include', title);
});

Then('the page heading should be {string}', (pageHeading) => {
  cy.get('.primary-header h1').should('contain', pageHeading);
});

When('I click on the sidenav toggle button', () => {
  cy.get('mat-sidenav').should('not.be.visible');
  cy.get('#nav-toggle').click();
});

Then('the sidenav should appear', () => {
  cy.get('mat-sidenav').should('be.visible');
});

When('I enter the {string} data to the form and submit', (data) => {
  cy.fixture(data).as('example');
  cy.get('@example')
    .then(example => {
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
    })
});

Then('the matching {string} data should appear below', (data) => {
  cy.fixture(data).as('example');
  cy.get('@example')
    .then(example => {
      cy.get('#form-submission-name').should("contain", example.name);
      cy.get('#form-submission-email').should("contain", example.email);
      cy.get('#form-submission-body').should("contain", example.body);
    })
});
