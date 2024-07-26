describe('Feature - Login', () => {
    it('TC - 004 FE | Register | Validar que un usuario pueda ser registrado correctamente - UI', () => {
        cy.visit("https://buggy.justtestit.org/");
        cy.get('.input-sm').type('Testing100@yopmail.com');
        cy.get('[name="password"]').type('OviCypress#10');
        cy.get('.btn-success').click();
        cy.get(':nth-child(3) > .nav-link').should('contain','Logout');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.scrollTo(0,500);
        cy.get('#gender').clear();
        cy.get('#gender').type('Male');
        cy.get('#age').clear();
        cy.get('#age').type('37');
        cy.get('#address').clear();
        cy.get('#address').type('Madrid #1755 Cobos, Irapuato , Gto');
        cy.get('#phone').clear();
        cy.get('#phone').type('321456789');
        cy.get('#hobby').select('Video Games');
        cy.get('.btn-default').click();
        cy.get(':nth-child(1) > .result').should('contain','The profile has been saved successful');
        cy.screenshot();
    });
});