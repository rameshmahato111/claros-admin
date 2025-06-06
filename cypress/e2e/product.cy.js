describe("ProductComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/products");
  });

  it("shows loading state", () => {
    cy.contains(/products loading/i).should("exist");
  });

  it("renders products from API", () => {
    cy.get("img").should("have.length.at.least", 1);
  });

  it("filters products by search", () => {
    cy.get('input[placeholder="Search Products"]').type("shirt");
    cy.wait(1000);
    cy.contains(/shirt/i).should("exist");
  });

  it("has Add Product button with icon", () => {
    cy.get("button").contains(/add product/i).should("exist");
  });

  it("has edit and delete buttons for each product", () => {
    cy.get("button").filter(":has(svg)").should("have.length.greaterThan", 1);
  });
});
