/**
 * Cypress test to automate the Stripe / Link checkout form
 *
 * IMPORTANT
 * ---------
 * Stripe renders card number / expiry / CVC inside cross-origin
 * <iframe>s for PCI-DSS compliance. Cypress can't click into a
 * cross-origin iframe by default, so this test uses the helper below.
 * Make sure cypress.config.js has: chromeWebSecurity: false
 */

const email = "sup25@yopmail.com"; // was undefined before - define it here

function getWithinIframe(iframeSelector, innerSelector) {
  return cy
    .get(iframeSelector, { timeout: 10000 })
    .its("0.contentDocument.body", { timeout: 10000 })
    .should("not.be.empty")
    .then(cy.wrap)
    .find(innerSelector, { timeout: 10000 });
}

describe("Stripe / Link checkout form", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);

    cy.visit("https://test.saharamind.com/");

    // ---- Login / navigation flow (moved inside beforeEach) ----
    cy.get(":nth-child(1) > .h-11").type(email);
    cy.get(".shadow-xs").type("Test@123");
    cy.get(".space-y-5 > .justify-center").click();

    cy.get(".mt-10 > .flex > .inline-flex").click();
    cy.wait(2000);

    cy.get(":nth-child(1) > .space-y-4 > .justify-center").click();
    cy.wait(2000);

    cy.contains("Purchase").click();
    cy.wait(4000);

    cy.contains("Pay and subscribe").click();
    cy.wait(4000);
  });

  it("fills out card details and submits successfully", () => {
    getWithinIframe(
      'iframe[title="Secure card number input frame"], iframe[name^="__privateStripeFrame"][src*="cardnumber"]',
      'input[name="cardnumber"]',
    ).type("4242424242424242");

    getWithinIframe(
      'iframe[title="Secure expiration date input frame"], iframe[name^="__privateStripeFrame"][src*="expiry"]',
      'input[name="exp-date"]',
    ).type("1230");

    getWithinIframe(
      'iframe[title="Secure CVC input frame"], iframe[name^="__privateStripeFrame"][src*="cvc"]',
      'input[name="cvc"]',
    ).type("123");

    cy.get('select#country, select[name="country"]').select("Nepal");

    cy.contains("label", "Email")
      .parent()
      .find('input[type="email"], input[name="email"]')
      .type(email);

    cy.contains("label", "Mobile number")
      .parent()
      .find('input[type="tel"], input[name="phone"]')
      .type("9841234567");

    cy.contains("label", "Full name")
      .parent()
      .find('input[name="name"], input[placeholder="First and last name"]')
      .type("Jane Doe");

    cy.contains("button", /Pay|Submit/i).click();

    cy.contains("Payment successful", { timeout: 15000 }).should("be.visible");
  });

  it("shows validation errors when fields are left incomplete", () => {
    cy.contains("button", /Pay|Submit/i).click();

    cy.contains("Your card number is incomplete").should("be.visible");
    cy.contains("Your card's expiration date is incomplete").should(
      "be.visible",
    );
    cy.contains("Your card's security code is incomplete").should("be.visible");
  });
});
