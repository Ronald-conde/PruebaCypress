/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
const { deleteDownloadsFolderAfterAll } = require('cypress-delete-downloads-folder');


describe('delete downloads folder after all', () => {
    deleteDownloadsFolderAfterAll()
    it('should work', () => {
        cy.visit('https://demoqa.com/upload-download')
        cy.get("#downloadButton").click()
    })
})