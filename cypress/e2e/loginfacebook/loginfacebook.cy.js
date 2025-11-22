//test case for login functionality
describe('Login Test', () => {
    it('should log in successfully', () => {
        //opene the website
        cy.visit("https://www.amazon.in/");
        cy.wait(2000);
        //click o0n the Contact page
        cy.get(".nav-a[href='/deals?ref_=nav_cs_gb']").click();
        cy.wait(2000);
        //verify the contact page
        //cy.get(".page-heading").should('be.visible');
        //cy.get()
    })
})
