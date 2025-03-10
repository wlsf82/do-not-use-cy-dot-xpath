describe('Cypress Playground', () => {
  it('signs and checks the checkbox to see the signature preview', () => {
    // Arrange
    cy.visit('index.html')

    // Act
    cy.get('#signature-textarea-with-checkbox').type('Walmyr')
    cy.get('#signature-checkbox').check()

    // Assert
    cy.contains(
      '#signature-triggered-by-check',
      'Walmyr'
    ).should('be.visible')
  })
})
