context('Bank', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('can display transactions ascending', () => {
    cy.get('li:first').should('have.text', '19-07-2017');
  });

  it('can display transactions descending', () => {
    cy.get('button:first').click();
    cy.get('li:first').should('have.text', '20-06-2017');
  });
});
