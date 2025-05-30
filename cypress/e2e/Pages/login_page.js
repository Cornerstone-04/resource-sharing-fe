export class LoginPage {

    emailTextBox = '#email'
    passwordTextBox = '#password'
    loginButton = '.inline-flex'
    errorNotification = '[data-content=""] > div'

    userLogin(email, password) {
        cy.contains('Login').click()
        cy.get(this.emailTextBox).type(email)
        cy.get(this.passwordTextBox).type(password)
        cy.get(this.loginButton).click()
    }

    invalidLoginError() {
        cy.get(this.errorNotification)
            .should('be.visible')
            .and('contain', 'An unexpected error occurred. Please try again.')
    }
}