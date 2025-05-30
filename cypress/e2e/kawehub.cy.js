import { LoginPage } from "./pages/login_page";

const loginpage = new LoginPage();

beforeEach(function () {
  cy.visit("https://resource-sharing-fe.vercel.app/");
});

describe("All Login Tests", () => {
  it('Verify that "Welcome Back" text exists', () => {
    cy.get('[href="/auth/login"] > .inline-flex').click();
    cy.contains("Welcome Back").should("be.visible");
  });
  it('Verify that "login to borrow and lend resources" text exists', () => {
    cy.get('[href="/auth/login"] > .inline-flex').click();
    cy.contains("Login to borrow and lend resources").should("be.visible");
  });
  it("Verify that email input field exists", () => {
    cy.get('[href="/auth/login"] > .inline-flex').click();
    cy.get('input[type="email"]').should("exist");
  });
  it("Verify that password input field exists", () => {
    cy.get('[href="/auth/login"] > .inline-flex').click();
    cy.get('input[type="password"]').should("exist");
  });
  it("Verify that login button exists", () => {
    cy.get('[href="/auth/login"] > .inline-flex').click();
    cy.contains("button", "Login").should("exist");
  });
  it("Valid login", () => {
    loginpage.userLogin("20-52ha093@students.unilorin.edu.ng", "12345678");
    cy.url().should("include", "/dashboard");
  });
  it("Invalid login with invalid email only", () => {
    loginpage.userLogin("omobolajsadare@gmail.com", "12345678");
    cy.get('[data-content=""] > div')
      .should("be.visible")
      .and("contain", "An unexpected error occurred. Please try again.");
  });
  it("Invalid login with invalid password only", () => {
    loginpage.userLogin("omobolajiosadare@gmail.com", "123678");
    loginpage.invalidLoginError();
  });
  it("Invalid login with invalid email and password", () => {
    loginpage.userLogin("omobolajiosre@gmail.com", "12678");
    loginpage.invalidLoginError();
  });
});
