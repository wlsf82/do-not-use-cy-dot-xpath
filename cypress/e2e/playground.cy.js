describe('Cypress Playground', () => {
  it('signs and checks the checkbox to see the signature preview', () => {
    // Arrange
    cy.visit('/index.html')

    // Act
    cy.xpath('//*[@id="signature-textarea-with-checkbox"]').type('Walmyr')
    cy.xpath('//*[@id="signature-checkbox"]').check()

    // Assert
    cy.xpath('//*[@id="signature-triggered-by-check"]').should('be.visible')
  })
})
