describe("Home Page", () => {
  
  const mockProducts = [
    {
      id: 1,
      title: "Mock Product One",
      price: 99.99,
      image: "/mock-product-1.png",
    },
    {
      id: 2,
      title: "Mock Product Two",
      price: 59.99,
      image: "/mock-product-2.png",
    },
    {
      id: 3,
      title: "Mock Product Three",
      price: 29.99,
      image: "/mock-product-3.png",
    },
  ];

  beforeEach(() => {
   
    cy.intercept("GET", "https://fakestoreapi.com/products", {
      statusCode: 200,
      body: mockProducts,
    }).as("getProducts");

    cy.visit("/");
  });

  it("renders HomeComponent and product preview", () => {
    cy.wait("@getProducts");

    
    cy.get("body").should("contain.text", ""); 


    cy.contains("h2", "New Products Added").should("exist");
    cy.contains("View More")
      .should("exist")
      .and("have.attr", "href", "/products");


    cy.contains("h2", "New Products Added")
      .parent()
      .parent()
      .within(() => {
        cy.get("img[alt*='Mock Product']").should("have.length", 2);

        cy.contains("Mock Product One").should("exist");
        cy.contains("Mock Product Two").should("exist");
      });
  });

  it("navigates to products page when clicking 'View More'", () => {
    cy.wait("@getProducts");
    cy.contains("View More").click();
    cy.url().should("include", "/products");
  });

  it("shows loading state", () => {
   
    cy.intercept("GET", "https://fakestoreapi.com/products", (req) => {
      req.on("response", (res) => {
        res.setDelay(2000);
      });
    }).as("getProductsDelayed");

    cy.visit("/");
    cy.contains("Loading products...").should("exist");
  });

  it("shows error state on API failure", () => {

    cy.intercept("GET", "https://fakestoreapi.com/products", {
      statusCode: 500,
      body: {},
    }).as("getProductsFail");

    cy.visit("/");
    cy.contains("Error loading products.").should("exist");
  });
});
