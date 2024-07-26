describe('Feature - Register User', () => {
    it('TC - 003 FE | Register | Validar que un usuario pueda ser registrado correctamente - UI', () => {
        cy.visit("https://buggy.justtestit.org/");
        cy.get('.btn-success-outline').click();
        cy.get('#username').type("Testing100@yopmail.com");
        cy.get('#firstName').type('Oswaldo');
        cy.get('#lastName').type('Toledo');
        cy.get('#password').type('OviCypress#10');
        cy.get('#confirmPassword').type('OviCypress#10');
        cy.get('.btn-default').click();
        cy.get('.result').should('contain','Registration is successful');
        cy.screenshot();
    });
});