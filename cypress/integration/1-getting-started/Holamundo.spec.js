//Validar título
/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("Validar título",()=> {
    it("Validar Web DEMOQA",()=> {
        cy.visit("https://demoqa.com/")
        cy.title().should("eq","DEMOQA")
    })
})
