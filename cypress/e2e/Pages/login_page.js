export class LoginPage{
    
    emailTextBox = '#email'
    passwordTextBox = '#password'
    loginButton = '.inline-flex'

    userLogin(email, password){
        cy.contains('Login').click()
        cy.get(this.emailTextBox).type(email)
        cy.get(this.passwordTextBox).type(password)
        cy.get(this.loginButton).click()
    }
}