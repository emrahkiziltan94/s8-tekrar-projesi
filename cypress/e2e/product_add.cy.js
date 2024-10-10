describe('ProductAdd Component', () => {
  beforeEach(() => {

    cy.visit('http://localhost:5174/product-add');
  });

  it('should successfully submit the form with valid data', () => {
    cy.get('input[name="title"]').type('Valid Title');
    cy.get('input[name="description"]').type('Valid Description');
    cy.get('input[name="price"]').clear().type('100');
    cy.get('button').should('not.be.disabled').click();


    cy.url().should('eq', 'http://localhost:5174/');


    cy.contains('Valid Title').should('exist');
  });

  it('should show an error when the title is empty or contains numbers', () => {
    cy.get('input[name="title"]').focus().blur();
    cy.get('p').contains('Sayısal değer yada null olamaz').should('exist');
    cy.get('input[name="title"]').type('Title123');
    cy.get('p').contains('Sayısal değer yada null olamaz').should('exist');
  });

  it('should show an error when the description is empty or contains numbers', () => {

    cy.get('input[name="description"]').focus().blur();
    cy.get('p').contains('Sayısal değer yada null olamaz').should('exist');


    cy.get('input[name="description"]').type('Description456');
    cy.get('p').contains('Sayısal değer yada null olamaz').should('exist');
  });

  it('should disable the submit button when there are validation errors', () => {

    cy.get('input[name="title"]').type('Invalid123');


    cy.get('button').should('be.disabled');
  });
});