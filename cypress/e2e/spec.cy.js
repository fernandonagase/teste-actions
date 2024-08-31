describe('Incrementa ao clicar no botao', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://127.0.0.1:9001/')
    const counter = cy.contains('count')
    counter.click()
    counter.should('have.text', 'count is 1')
  })
})