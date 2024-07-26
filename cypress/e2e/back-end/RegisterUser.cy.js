describe('Feature Register-User', () => {
    it('TC - 001 BE | Register | Registrar un usuario en la pagina web', () => {
        cy.request("POST", "https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users", {
            "username": "test6@yopmail.com", 
            "firstName": "Oviyopoo",
            "lastName": "Ovilastoo",
            "password": "Testing#12",
            "confirmPassword": "Testing#12"
        }).then((response)=> {
            expect(response.status).to.eq(201);
            expect(response.body).to.not.be.null;
        });
    });

});