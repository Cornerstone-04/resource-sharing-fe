
import {LoginPage} from "./pages/login_page"

const loginpage = new LoginPage()

beforeEach(function(){
    cy.visit('https://resource-sharing-fe.vercel.app/')
})

describe('All Login Tests', () => {
    
    it('Valid login', () => {
    loginpage.userLogin('omobolajiosadare@gmail.com', '12345678')
})
    it('Invalid login with invalid email only', () => {
    loginpage.userLogin('omobolajsadare@gmail.com', '12345678')
})
    it('Invalid login with invalid password only', () => {
    loginpage.userLogin('omobolajiosadare@gmail.com', '123678')
})
    it('Invalid login with invalid email and password', () => {
    loginpage.userLogin('omobolajiosre@gmail.com', '12678')
})
})





