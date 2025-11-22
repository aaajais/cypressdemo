// cypress/support/pageObjects/LoginPage.js
class LoginPage {
    visit() {
        cy.visit('https://facebook.com')
    }
    enterUsername(username) {
        cy.get('#email').type('abhishekjaiswal2901@gmail.com');
    }
    enterPassword(password) {
        cy.get('#passContainer').type('123Ab@123');
    }
    submit() {
        cy.get('[data-testid="royal-login-button"]').click();
    }
  }
  
  export default LoginPage;
  