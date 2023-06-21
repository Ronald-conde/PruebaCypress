/// <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
require('cypress-plugin-tab');
import POM_E4 from './POM_E4.js';
const master = new POM_E4();

describe("Cargando datos desde archivo Json ubicado en Fixture", () => { 

    before(function() { // Se debe usar "before"
        cy.fixture("TestPractice.json").then(function(data) {
            //con cy.fixture accedemos a los archivos que tengamos dentro de fixture.
            globalThis.data = data;
        });
    });

    it.only("Validar Columna", () => {
        master.Visitar("https://demoqa.com/webtables", "DEMOQA");
        
        master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(1)", "First Name")
        master.Validar1erElemento(".ReactTable", ".rt-tr > :nth-child(1)", data.name1);
        master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(2)","Last Name")
        master.Validar1erElemento(".ReactTable", ".rt-tr > :nth-child(2)", data.lastname)
        master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(3)","Age")
        master.Validar1erElemento(".ReactTable", ".rt-tr > :nth-child(3)", data.age)
        master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(4)","Email")
        master.Validar1erElemento(".ReactTable", ".rt-tr > :nth-child(4)", data.email)
        master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(5)","Salary")
        master.Validar1erElemento(".ReactTable", ".rt-tr > :nth-child(5)", data.salary)
        master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(6)","Department")
        master.Validar1erElemento(".ReactTable", ".rt-tr > :nth-child(6)", data.department)
    });
});

        // master.ValidarColumna(".ReactTable", ".rt-tr > :nth-child(1)", "First Name")
        // cy.get(".ReactTable").find(".rt-tr > :nth-child(1)").eq(0).should("contain.text","First Name")
        // cy.get(".ReactTable").find(".rt-tr > :nth-child(2)").eq(1).each(($celda) => {
        //     cy.wrap($celda).should("contain.text", "Vega");
        // });

        // cy.get(".ReactTable").find(".rt-tr > :nth-child(1)").eq(0).should("have.text","First Name")
        // master.ValidarColumna(".ReactTable",".rt-tr > :nth-child(1)","First Name").then(() => {
        //     master.Validar1erElemento(".ReactTable",".rt-tr > :nth-child(1)","Cierra")
        // })