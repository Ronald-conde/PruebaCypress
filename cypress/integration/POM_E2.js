class POME2{
    visitar(web,title) {
        cy.visit(web)
        cy.title().should("eq",title)
    }
    texto(ID,texto) {
        cy.get(ID).type(texto)
    }
    Seleccionar(id) {
        cy.get(id).check({force:true})
    }
    Subirfoto(id) {
        let foto = "cypress/fixtures/conejo.jpg"
        cy.get(id).selectFile(foto)
    }
    Clickforzado(id) {
        cy.get(id).click({force:true})
    }
    Click(id) {
        cy.get(id).click()
    }
    Seleccion(id,seleccion,valor) {
        cy.get(id).select(seleccion).should("have.value", valor)
    }
    textoforzado(id,palabra) {
        cy.get(id).type(palabra + "\n")
    }
    textoyTab(id,nombre,apellido,correo) {
        cy.get(id).type(nombre).tab().type(apellido).tab().type(correo)
    }
}
export default POME2