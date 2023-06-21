class POM_E4 {
    Visitar(web,titulo) {
        cy.visit(web)
        cy.title().should("eq",titulo)
    }
    ValidarColumna(tabla,columna,texto) {
        cy.get(tabla).find(columna).eq(0).should("contain.text",texto);
    }
    Validar1erElemento(tabla,columna,texto) {
        cy.get(tabla).find(columna).eq(1).each(($celda)=> {
            cy.wrap($celda).should("contain.text",texto)
        })
    }
}
export default POM_E4