describe("My First Test", function() {
  it('clicks the link "type"', function() {
    cy.visit("http://localhost:3000");
    cy.get('a[href="/visas"]')
      .first()
      .click();

    cy.wait(1000);

    cy.get("#add-to-cart").click();

    cy.wait(1000);

    cy.get("#cart")
      .get("#cart-item")
      .get("#title");
  });
});
