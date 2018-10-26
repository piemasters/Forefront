const url = '';

export const navigateTo = () => cy.visit(url);

export const getGreeting = () => cy.get('app-root h1');
