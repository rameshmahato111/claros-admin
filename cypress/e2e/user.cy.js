/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe("UserComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/users"); // ✅ Update to your actual dev URL if different
  });

  it("shows loading state", () => {
    cy.contains(/loading please wait/i).should("exist");
  });

  it("renders users from API", () => {
    // Wait until at least one user is visible
    cy.contains(/email/i, { timeout: 10000 }).should("exist");

    // Check visible column headers
    cy.contains(/name/i).should("exist");
    cy.contains(/address/i).should("exist");
    cy.contains(/phone/i).should("exist");
  });

  it("filters users by search", () => {
    // Wait for data to load
    cy.contains(/email/i, { timeout: 10000 });

    // Type into search field
    cy.findByPlaceholderText(/search users/i).type("john");

    // Ensure filtered results appear
    cy.get("div").contains(/john/i).should("exist");

    // Ensure unmatching results do not appear
    cy.get("div").contains(/jane/i).should("not.exist");
  });

  it("has Add User button with icon", () => {
    cy.findByRole("button", { name: /add user/i }).should("exist");
  });

  it("displays user data correctly", () => {
    // Wait for API data to be present
    cy.contains(/email/i, { timeout: 10000 });

    // Avatar should be visible
    cy.get("img").should("be.visible");

    // Click the first "View" button to open the modal
    cy.contains("View").first().click();

    // Check if modal contains a valid email address
    cy.contains(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i).should("exist");

    // Check address format (city, street)
    cy.contains(/, /).should("exist");
  });
});
