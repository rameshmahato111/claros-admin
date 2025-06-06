/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe("UserComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/users"); // 
  });

  it("shows loading state", () => {
    cy.contains(/loading please wait/i).should("exist");
  });

  it("renders users from API", () => {
    
    cy.contains(/email/i, { timeout: 10000 }).should("exist");

    
    cy.contains(/name/i).should("exist");
    cy.contains(/address/i).should("exist");
    cy.contains(/phone/i).should("exist");
  });

  it("filters users by search", () => {
    
    cy.contains(/email/i, { timeout: 10000 });


    cy.findByPlaceholderText(/search users/i).type("john");

  
    cy.get("div").contains(/john/i).should("exist");

   
    cy.get("div").contains(/jane/i).should("not.exist");
  });

  it("has Add User button with icon", () => {
    cy.findByRole("button", { name: /add user/i }).should("exist");
  });

  it("displays user data correctly", () => {

    cy.contains(/email/i, { timeout: 10000 });

 
    cy.get("img").should("be.visible");

   
    cy.contains("View").first().click();

   
    cy.contains(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i).should("exist");

 
    cy.contains(/, /).should("exist");
  });
});
