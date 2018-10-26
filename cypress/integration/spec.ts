// it('loads', () => {
//   cy.visit('http://localhost:4300');
//   cy.get('app-root h1').contains('Test');
// });


import { navigateTo, getGreeting } from '../support/po';

describe('Hello Angular', () => {
  beforeEach(navigateTo);

  it('should display welcome message', () => {
    getGreeting().contains('Test');
  });

  it('has 4 links', () => {
    cy.get('mat-toolbar a').should('have.length', 4);
  });
});
