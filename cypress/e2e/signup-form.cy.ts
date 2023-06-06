describe('FedEx Signup Form', () => {
  it('Open the form', () => {
    cy.visit('/');
    cy.contains('FedEx Signup');
  });
  it('Validate the form', () => {
    cy.visit('/');
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#password').type('JohnDPassword');
    cy.get('#email').type('john@doe.com').blur();

    cy.get('.warning').contains(
      'Password should not contain either firstname or lastname.'
    );
  });
  it('Fill in the form', () => {
    cy.visit('/');
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#password').type('JDPassword');
    cy.get('#email').type('john@doe.com').blur();

    cy.get('button').click();

    cy.contains('Your data has been sent successfully.');
  });
});
