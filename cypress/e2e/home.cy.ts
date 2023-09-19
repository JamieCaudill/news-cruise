describe('home page', () => {
  it('should display a header', () => {
    cy.visit('localhost:3000')
    cy.get('h1').should('contain', 'News Cruise')
  })
})