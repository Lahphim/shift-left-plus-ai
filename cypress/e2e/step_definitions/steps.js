import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page", () => {
  cy.visit("/");
});

Then("I should see the navigation bar", () => {
  cy.get("nav").should("be.visible");
});

Then("the logo should be {string}", (logoText) => {
  cy.get(".logo").should("contain.text", logoText);
});

Then("I should see {int} navigation links", (count) => {
  cy.get(".nav-links a").should("have.length", count);
});

Then("the links should be {string}, {string}, {string}", (link1, link2, link3) => {
  cy.get(".nav-links a").eq(0).should("contain.text", link1);
  cy.get(".nav-links a").eq(1).should("contain.text", link2);
  cy.get(".nav-links a").eq(2).should("contain.text", link3);
});

When("I click the navigation link {string}", (linkText) => {
  cy.get(".nav-links a").contains(linkText).click();
});

Then("the page title should contain {string}", (titleText) => {
  cy.get("h1").should("contain.text", titleText);
});

Then("I should see a heading {string}", (headingText) => {
  cy.get("h2").contains(headingText).should("be.visible");
});

Then("I should see a subheading {string}", (headingText) => {
  cy.get("h3").contains(headingText).should("be.visible");
});

Then("I should see a card heading {string}", (headingText) => {
  cy.get(".card h2").contains(headingText).should("be.visible");
});

Then("I should see text {string}", (text) => {
  cy.get("p").contains(text).should("be.visible");
});

Then("I should see a button with text {string}", (btnText) => {
  cy.get(".action-btn").contains(btnText).should("be.visible");
});

When("I click the button with text {string}", (btnText) => {
  cy.get(".action-btn").contains(btnText).click();
});

Then("I should be able to connect to the Google Gemini API", () => {
  const apiKey = Cypress.env('GEMINI_API_KEY');
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not defined in Cypress environment (e.g., cypress.env.json)');
  }
  
  cy.request({
    url: `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
    failOnStatusCode: false
  }).then((response) => {
    // A valid key should return 200 OK and a list of models
    expect(response.status).to.eq(200);
  });
});

Then("I ask the brain to verify accessibility for {string} and expect {string}", (selector, expectedStatus) => {
  cy.verifyWithBrain(selector).then((result) => {
    const suggestedFix = typeof result.suggested_fix === 'object' 
      ? JSON.stringify(result.suggested_fix, null, 2)
      : result.suggested_fix;
    
    const errorMessage = result.status === "FAIL" 
      ? `\n\n` +
        `======================================================\n` +
        ` ❌ ACCESSIBILITY VIOLATION FOUND\n` +
        `======================================================\n\n` +
        ` 🔍 REASON:\n` +
        `    ${result.reason}\n\n` +
        ` 💡 SUGGESTED FIX:\n` +
        `    ${suggestedFix}\n\n` +
        `======================================================\n`
      : `Expected ${expectedStatus} but got ${result.status}`;

    expect(result.status, errorMessage).to.eq(expectedStatus);
  });
});
