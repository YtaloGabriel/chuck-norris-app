describe('Chuck Norris Message', () => {
  it('Given i am on the home page', () => {
    cy.visit('/')
  })

  it('The fact item should exists on the page', () => {
    cy.get('#factItem').should('exist')
  })

  it('The h1 element should exists on the page', () => {
    cy.get('h1').should('exist')
  })

  it('The Chuck Norris Icon should exists on the page', () => {
    cy.get('#chuckNorrisIcon').should('exist')
  })

  it('The Button should exists on the page', () => {
    cy.get('button').should('exist')
  })

  it('The Button should have the text Random Fact', () => {
    cy.get('button').should('have.text', 'Random Fact')
  })

  it('When i click on the button, h1 element should be back after loading', () => {
    cy.get('button').click()
    cy.get('h1').should('exist')
  })

  it('When i click on the button, the fact should be different from the previous fact', () => {
    cy.get('h1').then(($el) => {
      const firstFact = $el.text()

      cy.get('button').click()
      cy.get('h1').should(($el) => {
        expect($el.text()).to.not.equal(firstFact)
      })
    })
  })
})
